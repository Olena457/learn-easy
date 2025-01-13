import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebase/firebaseConfig.js';
import {
  get,
  ref,
  query,
  orderByChild,
  equalTo,
  startAfter,
  limitToFirst,
} from 'firebase/database';

export const fetchFilterData = createAsyncThunk(
  'filters/fetchFilterData',
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');
      const snapshot = await get(teachersRef);
      if (snapshot.exists()) {
        const teachersObject = snapshot.val();
        const teachers = Object.values(teachersObject);

        const uniqueLanguages = [
          ...new Set(teachers.flatMap(teacher => teacher.languages)),
        ];
        const uniqueLevels = [
          ...new Set(teachers.flatMap(teacher => teacher.levels)),
        ];
        const uniquePrices = [
          ...new Set(teachers.map(teacher => teacher.price_per_hour)),
        ];

        return {
          languages: uniqueLanguages,
          levels: uniqueLevels,
          prices: uniquePrices,
        };
      } else {
        return { languages: [], levels: [], prices: [] };
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchFilteredTeachers = createAsyncThunk(
  'teachers/fetchFilteredTeachers',
  async (
    { lastKey = null, selectedLanguage, selectedLevel, selectedPrice },
    thunkAPI
  ) => {
    try {
      const teachersRef = ref(database, 'teachers');
      let teachersQuery = teachersRef;

      if (selectedLanguage) {
        teachersQuery = query(
          teachersRef,
          orderByChild('languages'),
          equalTo(selectedLanguage)
        );
      }
      if (selectedLevel) {
        teachersQuery = query(
          teachersRef,
          orderByChild('levels'),
          equalTo(selectedLevel)
        );
      }
      if (selectedPrice) {
        teachersQuery = query(
          teachersRef,
          orderByChild('price_per_hour'),
          equalTo(parseInt(selectedPrice))
        );
      }

      const teachersPaginatedQuery = lastKey
        ? query(teachersQuery, startAfter(lastKey), limitToFirst(4))
        : query(teachersQuery, limitToFirst(4));

      const snapshot = await get(teachersPaginatedQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const teachersArray = Object.keys(data).map(id => ({
          id,
          ...data[id],
        }));

        const result = {
          teachers: teachersArray,
          lastKey: teachersArray[teachersArray.length - 1]?.id || null,
        };
        return result;
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
