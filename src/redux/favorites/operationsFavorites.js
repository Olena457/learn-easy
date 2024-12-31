import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database } from '../../firebase/firebaseConfig.js';
import { get, ref, set } from 'firebase/database';

//_______________ Fetch favorites
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue('User is not authenticated');
      }

      const favoritesRef = ref(database, `users/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);

      if (snapshot.exists()) {
        const favoritesObject = snapshot.val();
        const favoritesIds = Object.keys(favoritesObject);

        const teacherPromises = favoritesIds.map(async id => {
          const teacherRef = ref(database, `teachers/${id}`);
          const teacherSnapshot = await get(teacherRef);
          return { id, ...teacherSnapshot.val() };
        });

        const favoritesArray = await Promise.all(teacherPromises);
        return favoritesArray;
      } else {
        return [];
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

//_______________________ Toggle favorite
export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (teacher, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue('User is not authenticated');
      }

      const favoritesRef = ref(database, `users/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);

      let favorites = {};
      if (snapshot.exists()) {
        favorites = snapshot.val();
      }

      if (favorites[teacher.id]) {
        delete favorites[teacher.id];
      } else {
        favorites[teacher.id] = true;
      }

      await set(favoritesRef, favorites);

      const updatedFavoritesIds = Object.keys(favorites);
      const teacherPromises = updatedFavoritesIds.map(async id => {
        const teacherRef = ref(database, `teachers/${id}`);
        const teacherSnapshot = await get(teacherRef);
        return { id, ...teacherSnapshot.val() };
      });

      const updatedFavoritesArray = await Promise.all(teacherPromises);
      return updatedFavoritesArray;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
