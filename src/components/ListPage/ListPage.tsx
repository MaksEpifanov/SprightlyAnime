import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from 'app/store.hooks';
import { fetchData } from 'features/list/listSlice';
import { fetchAnimeList, Category } from 'services/API/animeList.service';

import { List } from 'features/list';
import Pagination from 'features/pagination';

import { Wrapper, StTitleWithPagination, StTitle } from './ListPage.styles';

interface ListPageProps {
  category: Category
  title: string
}

const ListPage: React.FC<ListPageProps> = ({ category, title }) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 0;

  useEffect(() => {
    dispatch(fetchData(() => fetchAnimeList(category, +page)));
  }, [dispatch, page, category]);

  return (
    <Wrapper>
      <StTitleWithPagination>
        <StTitle>{title}</StTitle>
        <Pagination short />
      </StTitleWithPagination>
      <List />
      <Pagination />
    </Wrapper>
  );
};

export default ListPage;
