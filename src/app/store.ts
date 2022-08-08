import { configureStore } from '@reduxjs/toolkit';
import animeListSlice from '../features/list/listSlice';

export const store = configureStore({
  reducer: {
    list: animeListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
