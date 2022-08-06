import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnime } from '../../types/anime';
import { StatusLoading } from '../../types';

export interface IAnimeInfo {
  data: IAnime | null
  status: StatusLoading
}

const initialState: IAnimeInfo = {
  data: null,
  status: StatusLoading.idle,
};

export const animeInfoReducer = createSlice({
  name: 'animeInfo',
  initialState,
  reducers: {
  },
});
