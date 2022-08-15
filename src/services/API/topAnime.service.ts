import type { IListAnimeData } from 'types/common.types';
import http from '../http';

const fetchTopAnime = async () => {
  const { data } = await http.get<IListAnimeData>('top/anime', { params: { limit: 15 } });
  return data;
};

export default fetchTopAnime;
