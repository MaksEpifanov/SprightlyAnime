import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IAnime } from 'types/anime.types';
import { StatusLoading } from 'types/common.types';

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
