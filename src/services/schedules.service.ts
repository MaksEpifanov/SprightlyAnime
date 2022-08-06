import axios from 'axios';
import http from './http-common';
import type { IAnime } from '../types/anime';
import type { IResponse } from '../types';

export enum FilterByDay {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  unknown = 'unknown',
  other = 'other',
}

export const fetchSchedules = async (
  filter?: FilterByDay,
  limit?: number,
  kids?: true | false,
  sfw: true | false = true,
) => {
  try {
    const params = {
      filter, kids, limit, sfw,
    };
    const { data: { data } } = await http.get<IResponse<IAnime[]>>('schedules', { params });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
