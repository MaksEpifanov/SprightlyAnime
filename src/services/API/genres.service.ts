import type { IResponse } from 'types/common.types';
import type { IMalBasic } from 'types/anime.types';
import http from '../http';

export interface IAnimeGenres extends IMalBasic {
  count: number
}

export const fetchAnimeGenres = async () => {
  const { data: { data } } = await http.get<IResponse<IAnimeGenres[]>>('genres/anime');
  return data;
};
