import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { StatusLoading, IAnimesData, SerializedError } from '../../types';

export interface IAnimeList extends IAnimesData {
  status: StatusLoading
  errors: SerializedError | null
}
type FetchDataType = () => Promise<IAnimesData>;

export const fetchData = createAsyncThunk(
  'anime/fetchData',
  async (fetchList: FetchDataType) => {
    const res = await fetchList();
    return res;
  },
);

const initialState: IAnimeList = {
  data: [],
  pagination: {
    last_visible_page: 0,
    has_next_page: false,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
  status: StatusLoading.idle,
  errors: null,
};

export const animeListReducer = createSlice({
  name: 'animeList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action): void => {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.status = StatusLoading.success;
      state.errors = null;
    });
    builder.addCase(fetchData.pending, (state): void => {
      state.status = StatusLoading.loading;
      state.errors = null;
    });
    builder.addCase(fetchData.rejected, (state, action): void => {
      state.errors = action.error;
      state.status = StatusLoading.failure;
    });
  },
});

export default animeListReducer.reducer;
