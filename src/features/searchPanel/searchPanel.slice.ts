import { createSlice } from '@reduxjs/toolkit';
import { StatusLoading } from 'types/common.types';

const initialState = {
  data: null,
  status: StatusLoading.idle,
};

const searchPanelSlice = createSlice({
  name: 'animeInfo',
  initialState,
  reducers: {
  },
});

export default searchPanelSlice;
