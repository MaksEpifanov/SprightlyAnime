import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchAnimeById } from 'services/API/animeItem.service';
import { StatusLoading, SerializedError } from 'types/common.types';
import type { IAnime } from 'types/anime.types';

export interface IAnimeInfo {
  data: IAnime | null
  status: StatusLoading
  errors: SerializedError | null
}

export const fetchAnimeInfo = createAsyncThunk(
  'anime/fetchAnimeInfo',
  async (id: number) => {
    const res = await fetchAnimeById(id);
    return res;
  },
);

const initialState: IAnimeInfo = {
  data: null,
  status: StatusLoading.idle,
  errors: null,
};

export const infoReducer = createSlice({
  name: 'animeInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnimeInfo.fulfilled, (state, action): void => {
      state.data = action.payload.data;
      state.status = StatusLoading.success;
      state.errors = null;
    });
    builder.addCase(fetchAnimeInfo.pending, (state): void => {
      state.status = StatusLoading.loading;
      state.errors = null;
    });
    builder.addCase(fetchAnimeInfo.rejected, (state, action): void => {
      state.errors = action.error;
      state.status = StatusLoading.failure;
    });
  },
});

export default infoReducer.reducer;
