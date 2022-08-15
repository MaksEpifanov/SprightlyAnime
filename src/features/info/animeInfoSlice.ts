import { createSlice } from '@reduxjs/toolkit';
import type { IAnime } from 'types/anime.types';
import { StatusLoading, SerializedError } from 'types/common.types';

export interface IAnimeInfo {
  data: IAnime | null
  status: StatusLoading
  error: SerializedError | null
}

const initialState: IAnimeInfo = {
  data: null,
  status: StatusLoading.idle,
  error: null,
};

export const animeInfoReducer = createSlice({
  name: 'animeInfo',
  initialState,
  reducers: {
  },
});
