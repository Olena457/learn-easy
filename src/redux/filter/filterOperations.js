// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { database } from '../../firebase/firebaseConfig.js';
// import { get, ref } from 'firebase/database';

// export const fetchFilterData = createAsyncThunk(
//   '  teachers/fetchFilterData',
//   async (_, thunkAPI) => {
//     try {
//       const teachersRef = ref(database, 'teachers');
//       const snapshot = await get(teachersRef);
//       if (snapshot.exists()) {
//         const teachersObject = snapshot.val();
//         const teachers = Object.values(teachersObject);

//         const uniqueLanguages = [
//           ...new Set(teachers.flatMap(teacher => teacher.languages)),
//         ];
//         const uniqueLevels = [
//           ...new Set(teachers.flatMap(teacher => teacher.levels)),
//         ];

//         return { languages: uniqueLanguages, levels: uniqueLevels };
//       } else {
//         return { languages: [], levels: [] };
//       }
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
