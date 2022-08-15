import { useEffect } from 'react';
import fetchTopAnime from 'services/API/topAnime.service';
import { useAppDispatch, useAppSelector } from 'app/store.hooks';

import { createNumbersArray } from 'utils/helpers/skeleton.helpers';
import { StatusLoading } from 'types/common.types';
import SkeletonCard from 'components/Skeletons/SkeletonCard';
import Card from 'components/Card';
import Error from 'components/Error';
import { Link } from 'react-router-dom';
import { fetchAsideData } from './asideSlice';

import { Wrapper, TopList, Title } from './Aside.styles';

const Aside = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsideData(fetchTopAnime));
  }, [dispatch]);

  const { data, status, errors } = useAppSelector((state) => state.aside);

  let renderData: React.ReactNode = createNumbersArray(15)
    .map((number) => <SkeletonCard second key={number} />);

  if (status === StatusLoading.success) {
    renderData = data.map((item) => <Link to={`/anime/${item.mal_id}`} style={{ textDecoration: 'none' }}><Card second item={item} key={item.mal_id} /></Link>);
  }
  if (status === StatusLoading.failure) {
    renderData = <Error errors={errors} />;
  }
  return (
    <Wrapper>
      <Title>Top anime</Title>
      <TopList>
        {renderData}
      </TopList>
    </Wrapper>
  );
};

export default Aside;
