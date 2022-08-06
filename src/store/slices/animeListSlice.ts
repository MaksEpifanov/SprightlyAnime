import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusLoading, IAnimesData } from '../../types';

export interface IAnimeList extends IAnimesData {
  status: StatusLoading
}

const fethData = createAsyncThunk(
  'anime/fetchData',
  async (fetchList: () => Promise<IAnimesData>) => {
    const response = await fetchList();
  },
);

const initialState: IAnimeList = {
  data: [],
  pagination: null,
  status: StatusLoading.idle,
};

export const animeListReducer = createSlice({
  name: 'animeList',
  initialState,
  reducers: {
  },
});
