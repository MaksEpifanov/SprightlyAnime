import type { IListAnimeData } from 'types/common.types';
import http from '../http';

export enum Category {
  now = 'seasons/now',
  upcoming = 'seasons/upcoming',
  top = 'top/anime',
}

export const fetchAnimeList = async (category: Category, page = 1) => {
  const { data } = await http.get<IListAnimeData>(category, { params: { page } });
  return data;
};
