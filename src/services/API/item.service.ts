import type { IAnime, IImages } from 'types/anime.types';
import type { IResponse } from 'types';
import http from '../http';

type IScore = {
  score: number
  votes: number
  percentage: number
};

interface ICharacter {
  character: {
    mal_id: number
    url: string
    images: IImages
    name: string
  }
  role: string
}

interface IStatistics {
  watching: number
  completed: number
  on_hold: number
  dropped: number
  plan_to_watch: number
  total: number
  scores: Array<IScore>
}

export const fetchAnimeById = async (id: number) => {
  const { data: { data }, status } = await http.get<IResponse<IAnime>>(`anime/${id}`);
  console.log(status);
  return data;
};

export const fetchRandomAnime = async () => {
  const { data: { data }, status } = await http.get<IResponse<IAnime>>('random/anime');
  console.log(status);
  return data;
};

export const fetchCharactersAnime = async (id: number) => {
  const { data: { data }, status } = await http.get<IResponse<ICharacter[]>>(`anime/${id}/characters`);
  console.log(status);
  return data;
};

export const fetchStatisticsAnime = async (id: number) => {
  const { data: { data }, status } = await http.get<IResponse<IStatistics>>(`anime/${id}/statistics`);
  console.log(status);
  return data;
};
