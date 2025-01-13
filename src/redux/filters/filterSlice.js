import { createSlice } from '@reduxjs/toolkit';
import { fetchFilterData } from './filterOperations.js';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    languages: [],
    levels: [],
    prices: [],
    selectedLanguage: '',
    selectedLevel: '',
    selectedPrice: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilterData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFilterData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.languages = action.payload.languages || [];
        state.levels = action.payload.levels || [];
        state.prices = action.payload.prices || [];
      })
      .addCase(fetchFilterData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setSelectedLanguage, setSelectedLevel, setSelectedPrice } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
