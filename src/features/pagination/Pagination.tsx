import { useSearchParams } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material';

import { StatusLoading } from 'types/common.types';
import { useAppSelector } from 'app/store.hooks';
import { PaginationProps } from './Pagination.types';
import {
  Wrapper, ArrowButton, CurrentPage, DbArrow,
} from './Pagination.styles';

const Pagination: React.FC<PaginationProps> = ({ short }) => {
  const [, setSearchParams] = useSearchParams();
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
            style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
          >
            <DbArrow left />
          </ArrowButton>
        )}

        <ArrowButton
          type="button"
          onClick={() => handleGoPage(currentPage - 1)}
          disabled={currentPage < 2}
          style={short ? { borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' } : {}}
        >
          <ArrowBackIos />
        </ArrowButton>

        {!short && (
          <CurrentPage>
            <div>{currentPage}</div>
          </CurrentPage>
        )}

        <ArrowButton
          type="button"
          onClick={() => handleGoPage(currentPage + 1)}
          disabled={!pagination.has_next_page}
          style={short ? { borderTopRightRadius: '8px', borderBottomRightRadius: '8px' } : {}}
        >
          <ArrowForwardIos />
        </ArrowButton>

        {
          !short && (
            <ArrowButton
              type="button"
              onClick={() => handleGoPage(pagination.last_visible_page)}
              disabled={currentPage >= pagination.last_visible_page}
              style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
            >
              <DbArrow />
            </ArrowButton>
          )
        }
      </Wrapper>
    );
  }
  return null;
};

export default Pagination;
