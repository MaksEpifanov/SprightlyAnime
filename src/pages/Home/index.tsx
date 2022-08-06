import { useEffect } from 'react';
import { Category, fetchAnimeList } from '../../services/anime-list.service';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      const { pagination } = await fetchAnimeList(Category.top);
      console.log(pagination);
    })();
  });
  return (
    <div>HomePage</div>
  );
};

export default HomePage;
