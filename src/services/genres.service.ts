import axios from 'axios';
import http from './http-common';
import type { IResponse } from '../types';
import type { IMalBasic } from '../types/anime';

export interface IAnimeGenres extends IMalBasic {
  count: number
}

export const fetchAnimeGenres = async () => {
  try {
    const { data: { data } } = await http.get<IResponse<IAnimeGenres[]>>('genres/anime');
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
