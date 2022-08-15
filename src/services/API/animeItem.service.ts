import type { IAnime, IImages, ICharacter } from 'types/anime.types';
import type { IData } from 'types/common.types';
import http from '../http';

type IScore = {
  score: number
  votes: number
  percentage: number
};

interface IAnimeCharacter {
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
  const { data } = await http.get<IData<IAnime>>(`anime/${id}`);
  return data;
};

export const fetchCharacterById = async (id: number) => {
  const { data } = await http.get<IData<ICharacter>>(`characters/${id}`);
  return data;
};

export const fetchRandomAnime = async () => {
  const { data } = await http.get<IData<IAnime>>('random/anime');
  return data;
};

export const fetchCharactersAnime = async (id: number) => {
  const { data } = await http.get<IData<IAnimeCharacter[]>>(`anime/${id}/characters`);
  return data;
};

export const fetchStatisticsAnime = async (id: number) => {
  const { data } = await http.get<IData<IStatistics>>(`anime/${id}/statistics`);
  return data;
};
