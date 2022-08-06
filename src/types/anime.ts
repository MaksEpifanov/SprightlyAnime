export enum TypeAnime {
  TV = 'TV',
  OVA = 'OVA',
  Movie = 'Movie',
  Special = 'Special',
  ONA = 'ONA',
  Music = 'Music',
}

export enum StatusAnime {
  FinishedAiring = 'Finished Airing',
  CurrentlyAiring = 'Currently Airing',
  NotAired = 'Not yet aired',
}

export enum RatingAnime {
  G = 'G - All Ages',
  PG = 'PG - Children',
  PG13 = 'PG-13 - Teens 13 or older',
  R = 'R - 17+ (violence & profanity)',
  Rplus = 'R+ - Mild Nudity',
  Rx = 'Rx - Hentai',
}

export enum SeasonAnime {
  Summer = 'summer',
  Winter = 'winter',
  Spring = 'spring',
  Fall = 'fall',
}

export interface IMalBasic {
  mal_id: number
  name: string
  url: string
}

interface IMalUrl extends IMalBasic {
  type: string
}

export interface IImages {
  jpg: {
    image_url: string | null
    small_image_url: string | null
    large_image_url: string | null
  }
  webp: {
    image_url: string | null
    small_image_url: string | null
    large_image_url: string | null
  }
}

export interface IAnime {
  mal_id: number
  url: string
  images: IImages
  trailer: {
    youtube_id: string | null
    url: string | null
    embed_url: string | null
  }
  titles: Array<string>
  type: TypeAnime
  source: string | null
  episodes: number | null
  status: StatusAnime
  airing: boolean
  aired: {
    from: string | null
    to: string | null
    // prop
  }
  duration: string | null
  rating: RatingAnime
  score: number | null
  // scored_by
  rank: number | null
  popularity: number | null
  // members
  // favorites
  // background
  season: SeasonAnime | null
  year: number | null
  producers: Array<IMalUrl>
  licensors: Array<IMalUrl>
  studios: Array<IMalUrl>
  genres: Array<IMalUrl>
}
