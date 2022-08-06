import { configureStore } from '@reduxjs/toolkit';
import animeListSlice from './slices/animeListSlice';

export const store = configureStore({
  reducer: {
    animeList: animeListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
