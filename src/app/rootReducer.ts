import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnime } from '../types/anime';

export interface RootSlice {
  data: Array<IAnime>
}

const initialState: RootSlice = {
  data: [],
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
  },
});
