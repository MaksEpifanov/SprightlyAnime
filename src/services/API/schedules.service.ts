import type { IAnime } from 'types/anime.types';
import type { IResponse } from 'types/common.types';
import http from '../http';

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
  const params = {
    filter, kids, limit, sfw,
  };
  const { data: { data } } = await http.get<IResponse<IAnime[]>>('schedules', { params });
  return data;
};
