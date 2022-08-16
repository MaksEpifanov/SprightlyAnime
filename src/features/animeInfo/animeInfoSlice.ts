import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchAnimeById, fetchRandomAnime } from 'services/API/animeItem.service';
import { StatusLoading, SerializedError } from 'types/common.types';
import type { IAnime } from 'types/anime.types';

interface IAnimeInfo {
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

export const fetchRandomAnimeInfo = createAsyncThunk(
  'anime/fetchRandomAnime',
  async () => {
    const res = await fetchRandomAnime();
    return res;
  },
);

const initialState: IAnimeInfo = {
  data: null,
  status: StatusLoading.idle,
  errors: null,
};

const infoReducer = createSlice({
  name: 'animeInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(fetchAnimeInfo.fulfilled, fetchRandomAnimeInfo.fulfilled),
        (state, action): void => {
          state.data = action.payload.data;
          state.status = StatusLoading.success;
          state.errors = null;
        },
      )
      .addMatcher(
        isAnyOf(fetchAnimeInfo.pending, fetchRandomAnimeInfo.pending),
        (state): void => {
          state.status = StatusLoading.loading;
          state.errors = null;
        },
      )
      .addMatcher(
        isAnyOf(fetchAnimeInfo.rejected, fetchRandomAnimeInfo.rejected),
        (state, action): void => {
          state.errors = action.error;
          state.status = StatusLoading.failure;
        },
      );
  },
});

export default infoReducer.reducer;
