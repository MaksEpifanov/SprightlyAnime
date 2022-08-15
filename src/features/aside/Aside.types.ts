import { IListData, SerializedError, StatusLoading } from 'types/common.types';

export interface IAnimeList extends IListData {
  status: StatusLoading
  errors: SerializedError | null
}
export type FetchDataType = () => Promise<IListData>;
