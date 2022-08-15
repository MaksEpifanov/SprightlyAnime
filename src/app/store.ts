import { configureStore } from '@reduxjs/toolkit';
import animeInfoSlice from 'features/animeInfo/animeInfoSlice';
import asideSlice from 'features/aside/asideSlice';
import animeListSlice from 'features/list/listSlice';

export const store = configureStore({
  reducer: {
    list: animeListSlice,
    aside: asideSlice,
    animeInfo: animeInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
