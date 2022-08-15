import type { IListAnimeData } from 'types/common.types';
import type { TypeAnime, StatusAnime, RatingAnime } from 'types/anime.types';
import http from '../http';

export enum OrderBy {
  malid = 'mal_id',
  title = 'title',
  type = 'type',
  rating = 'rating',
  startDate = 'start_date',
  endDate = 'end_date',
  episodes = 'episodes',
  score = 'score',
  scoredBy = 'scored_by',
  rank = 'rank',
  popularity = 'popularity',
  members = 'members',
  favorites = 'favorites',
}

export interface SearchParams {
  page?: number
  limit?: number
  q: string
  type?: TypeAnime
  score?: number
  min_score?: number
  max_score?: number
  status?: StatusAnime
  rating?: RatingAnime
  sfw?: boolean
  genres?: string
  genres_exclude?: string
  order_by?: OrderBy
  sort?: 'desc' | 'asc'
  letter?: string
  producers?: string
}

interface FetchSearchProps {
  params: SearchParams
}

export const fetchSearchAnime = async ({ params }: FetchSearchProps) => {
  const { data } = await http.get<IListAnimeData>('anime');
  return data;
};
