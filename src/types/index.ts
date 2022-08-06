import { IAnime } from './anime';

export enum StatusLoading {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failure = 'failure',
}

export interface IPagination {
  last_visible_page: number
  has_next_page: boolean
  items: {
    count: number
    total: number
    per_page: number
  }
}

export interface IResponse<T> {
  data: T
}
export interface IAnimesData {
  data: IAnime[]
  pagination: IPagination
}

export interface SerializedError {
  status?: number
  name?: string
  message?: string
  stack?: string
  code?: string
}
