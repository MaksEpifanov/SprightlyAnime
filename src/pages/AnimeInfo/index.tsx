import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimeInfo from 'features/animeInfo/AnimeInfo';

const AnimeInfoPage = () => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: 0 });
    }, 100);
  }, [location.pathname]);
  return (
    <AnimeInfo />
  );
};

export default AnimeInfoPage;
