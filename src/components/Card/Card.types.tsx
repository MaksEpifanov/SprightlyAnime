import type { IAnime } from 'types/anime.types';

export interface CardProps {
  second?: boolean
  item: IAnime
}

export interface StyleCardImageProps {
  linkImg: string | null
}
