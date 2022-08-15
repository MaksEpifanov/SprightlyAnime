import { IListAnimeData, SerializedError, StatusLoading } from 'types/common.types';

export interface IAnimeList extends IListAnimeData {
  status: StatusLoading
  errors: SerializedError | null
}
export type FetchDataType = () => Promise<IListAnimeData>;
