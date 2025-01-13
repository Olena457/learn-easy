import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTeachers,
  fetchTeachersPaginated,
  fetchFilteredTeachers,
} from './operationsTeachers.js';

const initialState = {
  data: [],
  filtered: [],
  lastKey: null,
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    setFilteredTeachers(state, action) {
      state.filtered = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTeachersPaginated.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachersPaginated.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload.teachers];
        state.lastKey = action.payload.lastKey;
        state.loading = false;
      })
      .addCase(fetchTeachersPaginated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredTeachers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.filtered = action.payload.teachers;
        state.lastKey = action.payload.lastKey;
      })
      .addCase(fetchFilteredTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilteredTeachers } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
