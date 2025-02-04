import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  get,
  set,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
  orderByChild,
  equalTo,
} from 'firebase/database';
import { auth, database } from '../../firebase/firebaseConfig.js';

// __________________fetch teachers
export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');
      const snapshot = await get(teachersRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (typeof data === 'object' && data !== null) {
          const teachersArray = Object.keys(data).map(id => ({
            id,
            ...data[id],
          }));
          return teachersArray;
        } else {
          return thunkAPI.rejectWithValue('Data format is not correct');
        }
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// __________________book teacher

export const bookTeacher = createAsyncThunk(
  'teachers/bookTeacher',
  async ({ fullname, email, phoneNumber, question, teacherID }, thunkAPI) => {
    try {
      const user = auth.currentUser;
      const uid = user.uid;

      const contactRef = ref(database, `booking/${teacherID}/${uid}`);

      await set(contactRef, {
        fullname,
        email,
        phoneNumber,
        question,
        teacherID,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// __________________fetch teachers with pagination

export const fetchTeachersPaginated = createAsyncThunk(
  'teachers/fetchTeachersPaginated',
  async ({ lastKey = null }, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');

      const teachersQuery = lastKey
        ? query(teachersRef, orderByKey(), startAfter(lastKey), limitToFirst(4))
        : query(teachersRef, orderByKey(), limitToFirst(4));

      const snapshot = await get(teachersQuery);

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

// __________________fetch filtered teachers

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
