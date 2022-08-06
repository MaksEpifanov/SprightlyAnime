import axios from 'axios';
import http from './http-common';

import type { IAnime, IImages } from '../types/anime';
import type { IResponse } from '../types';

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
  try {
    const { data: { data }, status } = await http.get<IResponse<IAnime>>(`anime/${id}`);
    console.log(status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const fetchRandomAnime = async () => {
  try {
    const { data: { data }, status } = await http.get<IResponse<IAnime>>('random/anime');
    console.log(status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const fetchCharactersAnime = async (id: number) => {
  try {
    const { data: { data }, status } = await http.get<IResponse<ICharacter[]>>(`anime/${id}/characters`);
    console.log(status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const fetchStatisticsAnime = async (id: number) => {
  try {
    const { data: { data }, status } = await http.get<IResponse<IStatistics>>(`anime/${id}/statistics`);
    console.log(status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
