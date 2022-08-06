import http from './http-common';
import type { IAnimesData } from '../types';

export enum Category {
  now = 'seasons/now',
  upcoming = 'seasons/upcoming',
  top = 'top/anime',
}

export const fetchAnimeList = async (category: Category, page = 1) => {
  const { data } = await http.get<IAnimesData>(category, { params: { page } });
  return data;
};
