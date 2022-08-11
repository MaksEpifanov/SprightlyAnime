import { SerializedError, IPagination } from 'types/common.types';

export interface ListProps<T> {
  isLoading?: boolean
  isFailed?: boolean
  data?: T
  pagination?: IPagination
  dataErrors?: SerializedError | null
}
