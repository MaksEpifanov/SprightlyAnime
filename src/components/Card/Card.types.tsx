import { HTMLAttributes } from 'react';
import type { IAnime } from 'types/anime.types';

interface SecondBaseProps {
  second?: boolean
}

export interface CardProps extends SecondBaseProps {
  item: IAnime
}

export interface StyleCardImageProps extends SecondBaseProps, HTMLAttributes<HTMLImageElement> {
  linkImg: string | null
}

export interface SecondBaseDivProps extends SecondBaseProps, HTMLAttributes<HTMLDivElement> { }
