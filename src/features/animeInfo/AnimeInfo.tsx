import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/store.hooks';
import { StatusLoading } from 'types/common.types';
import Anime from 'components/Anime/Anime';
import { fetchAnimeInfo } from './animeInfoSlice';

const AnimeInfo: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.animeInfo);
  useEffect(() => {
    if (id) {
      dispatch(fetchAnimeInfo(+id));
    }
  }, [dispatch, id]);
  if (status === StatusLoading.success) {
    return <Anime anime={data} />;
  }
  return (
    <Anime anime={null} loading />
  );
};

export default AnimeInfo;
