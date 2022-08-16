import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/store.hooks';
import { StatusLoading } from 'types/common.types';
import Anime from 'components/Anime/Anime';
import { fetchAnimeInfo, fetchRandomAnimeInfo } from './animeInfoSlice';

interface AnimeInfoProps {
  random?: boolean
}

const AnimeInfo: React.FC<AnimeInfoProps> = ({ random = false }) => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data, status } = useAppSelector((state) => state.animeInfo);

  useEffect(() => {
    if (id && !random) {
      dispatch(fetchAnimeInfo(+id));
    } else if (random) {
      dispatch(fetchRandomAnimeInfo());
    }
  }, [dispatch, id, random]);

  if (status === StatusLoading.success) {
    return <Anime anime={data} />;
  }
  return (
    <Anime anime={null} loading />
  );
};

export default AnimeInfo;
