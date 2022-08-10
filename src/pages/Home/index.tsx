import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store.hooks';
import { fetchData } from 'features/list/listSlice';
import { fetchAnimeList, Category } from 'services/API/animeList.service';

import Card from 'components/Card';
import { StatusLoading } from 'types/common.types';

const LoadingComp = () => (<div>Loading...</div>);

const HomePage = () => {
  const dispatch = useAppDispatch();
  const anime = useAppSelector((state) => state.list.data[0]);
  const anime2 = useAppSelector((state) => state.list.data[1]);
  const status = useAppSelector((state) => state.list.status);

  useEffect(() => {
    dispatch(fetchData(fetchAnimeList.bind(null, Category.now)));
  }, [dispatch]);

  if (status === StatusLoading.success) {
    console.log(anime);
    return (
      <>
        <Card item={anime} />
        <br />
        <Card item={anime2} />
        <br />
        <Card item={anime2} second />
      </>
    );
  }
  return (
    <LoadingComp />
  );
};

export default HomePage;
