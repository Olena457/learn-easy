// import { createSlice } from '@reduxjs/toolkit';
// import { fetchFilterData } from './filterOperations.js';

// const filterSlice = createSlice({
//   name: 'filters',
//   initialState: {
//     languages: ['French', 'English', 'Ukrainian', 'Polish'],
//     levels: [
//       'A1 Beginner',
//       'A2 Elementary',
//       'B1 Intermediate',
//       'B2 Upper-Intermediate',
//     ],
//     prices: [10, 20, 30, 40],
//     selectedLanguage: '',
//     selectedLevel: '',
//     selectedPrice: '',
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setSelectedLanguage: (state, action) => {
//       state.selectedLanguage = action.payload;
//     },
//     setSelectedLevel: (state, action) => {
//       state.selectedLevel = action.payload;
//     },
//     setSelectedPrice: (state, action) => {
//       state.selectedPrice = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchFilterData.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchFilterData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.languages = [
//           ...new Set([...state.languages, ...action.payload.languages]),
//         ];
//         state.levels = [
//           ...new Set([...state.levels, ...action.payload.levels]),
//         ];
//       })
//       .addCase(fetchFilterData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export const { setSelectedLanguage, setSelectedLevel, setSelectedPrice } =
//   filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
