import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from 'app/store.hooks';
import { fetchData } from 'features/list/listSlice';
import { fetchAnimeList, Category } from 'services/API/animeList.service';

import { List } from 'features/list';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 0;

  useEffect(() => {
    dispatch(fetchData(() => fetchAnimeList(Category.now, +page)));
  }, [dispatch, page]);

  return (
    <List title="Current season" />
  );
};

export default HomePage;
