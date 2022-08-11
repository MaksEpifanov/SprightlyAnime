import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store.hooks';
import { fetchData } from 'features/list/listSlice';
import { fetchAnimeList, Category } from 'services/API/animeList.service';

import { StatusLoading } from 'types/common.types';
import { List } from 'features/list';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const {
    status, data, errors, pagination,
  } = useAppSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchData(fetchAnimeList.bind(null, Category.now)));
  }, [dispatch]);

  if (status === StatusLoading.failure) {
    return (
      <List dataErrors={errors} isFailed />
    );
  } if (status === StatusLoading.success) {
    return (
      <List data={data} />
    );
  }
  return (
    <List isLoading />
  );
};

export default HomePage;
