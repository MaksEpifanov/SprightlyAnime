import { useEffect } from 'react';
import AnimeInfo from 'features/animeInfo/AnimeInfo';

const AnimeInfoPage = () => {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);
  return (
    <AnimeInfo />
  );
};

export default AnimeInfoPage;
