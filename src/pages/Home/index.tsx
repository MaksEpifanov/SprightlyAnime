import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';

import { fetchData } from '../../features/list/listSlice';
import { fetchAnimeList, Category } from '../../services/API/animeList.service';

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
