import { useEffect } from 'react';
import fetchTopAnime from 'services/API/topAnime.service';
import { useAppDispatch, useAppSelector } from 'app/store.hooks';

import { createNumbersArray } from 'utils/helpers/skeleton.helpers';
import { StatusLoading } from 'types/common.types';
import SkeletonCard from 'components/Skeletons/SkeletonCard';
import Card from 'components/Card';
import Error from 'components/Error';
import { fetchAsideData } from './asideSlice';

const Aside = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsideData(fetchTopAnime));
  }, [dispatch]);

  const { data, status, errors } = useAppSelector((state) => state.aside);

  let renderData: React.ReactNode = createNumbersArray(25)
    .map((number) => <SkeletonCard second key={number} />);

  if (status === StatusLoading.success) {
    renderData = data.map((item) => <Card second item={item} key={item.mal_id} />);
  }
  if (status === StatusLoading.failure) {
    renderData = <Error errors={errors} />;
  }
  return (
    <div>
      <h2>Top anime</h2>
      {renderData}
    </div>
  );
};

export default Aside;
