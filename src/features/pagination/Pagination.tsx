import { useSearchParams } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material';

import { StatusLoading } from 'types/common.types';
import { useAppSelector } from 'app/store.hooks';
import { PaginationProps } from './Pagination.types';
import {
  Wrapper, ArrowButton, CurrentPage, DbArrow,
} from './Pagination.styles';

const Pagination: React.FC<PaginationProps> = ({ short }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { status, pagination } = useAppSelector((state) => state.list);

  const handleGoPage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  if (status === StatusLoading.success) {
    const currentPage = pagination.current_page;
    return (
      <Wrapper>
        {!short && (
          <ArrowButton
            type="button"
            onClick={() => handleGoPage(1)}
            disabled={currentPage < 3}
          >
            <DbArrow left />
          </ArrowButton>
        )}

        <ArrowButton
          type="button"
          onClick={() => handleGoPage(currentPage - 1)}
          disabled={currentPage < 2}
        >
          <ArrowBackIos />
        </ArrowButton>

        <CurrentPage>
          <div>{currentPage}</div>
        </CurrentPage>

        <ArrowButton
          type="button"
          onClick={() => handleGoPage(currentPage + 1)}
          disabled={!pagination.has_next_page}
        >
          <ArrowForwardIos />
        </ArrowButton>

        {!short && (
          <ArrowButton
            type="button"
            onClick={() => handleGoPage(pagination.last_visible_page)}
            disabled={currentPage >= pagination.last_visible_page}
          >
            <DbArrow />
          </ArrowButton>
        )}
      </Wrapper>
    );
  }
  return null;
};

export default Pagination;
