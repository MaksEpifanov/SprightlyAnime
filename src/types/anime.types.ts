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
  G = 'g',
  PG = 'pg',
  PG13 = 'pg13',
  R17 = 'r17',
  R = 'r',
  Rx = 'rx',
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
    image_url: string
    small_image_url: string
    large_image_url: string
  }
  webp: {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
}

export interface ITitle {
  type: string
  title: string
}

export interface ICharacter extends IMalBasic {
  images: IImages
  name_kanji: string | null
  nicknames: string[]
  favorites: number
  about: string | null
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
  title_english: string
  titles: ITitle[]
  type: TypeAnime
  source: string | null
  episodes: number | null
  status: StatusAnime
  airing: boolean
  aired: {
    from: string
    to: string
    string: string
    // prop
  }
  synopsis: string
  duration: string | null
  rating: RatingAnime
  score: number | null
  scored_by: number
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
