import axios from 'axios';
import http from './http-common';
import type { IAnimesData } from '../types';

export enum Category {
  now = 'seasons/now',
  upcoming = 'seasons/upcoming',
  top = 'top/anime',
}

export const fetchAnimeList = async (category: Category, page = 1) => {
  try {
    const { data } = await http.get<IAnimesData>(category, { params: { page } });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
