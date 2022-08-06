import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { fetchData } from '../../store/slices/animeListSlice';
import { fetchAnimeList, Category } from '../../services/anime-list.service';

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData(fetchAnimeList.bind(null, Category.now)));
  }, [dispatch]);

  return (
    <div>HomePage</div>
  );
};

export default HomePage;
