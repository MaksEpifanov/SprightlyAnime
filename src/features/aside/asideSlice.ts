import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusLoading, IListData, SerializedError } from 'types/common.types';

export interface IAnimeList extends IListData {
  status: StatusLoading
  errors: SerializedError | null
}
type FetchDataType = () => Promise<IListData>;

export const fetchAsideData = createAsyncThunk(
  'anime/fetchAsideData',
  async (fetchList: FetchDataType) => {
    const res = await fetchList();
    return res;
  },
);

const initialState: IAnimeList = {
  data: [],
  pagination: {
    current_page: 0,
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

export const animeAsideReducer = createSlice({
  name: 'aside',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsideData.fulfilled, (state, action): void => {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.status = StatusLoading.success;
      state.errors = null;
    });
    builder.addCase(fetchAsideData.pending, (state): void => {
      state.status = StatusLoading.loading;
      state.errors = null;
    });
    builder.addCase(fetchAsideData.rejected, (state, action): void => {
      state.errors = action.error;
      state.status = StatusLoading.failure;
    });
  },
});

export default animeAsideReducer.reducer;
