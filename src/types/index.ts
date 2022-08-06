import type { IAnime } from './anime';
import type { IPagination } from './pagination';

export enum StatusLoading {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failure = 'failure',
}

export interface IAnimesData {
  data: Array<IAnime>
  pagination: IPagination | null
}
