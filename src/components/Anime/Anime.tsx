import type { IAnime } from 'types/anime.types';
import {
  StAnimeImg,
  StAnime,
  StAnimeInfo,
  StAnimeInfoTitle,
  StAnimeInfoText,
  StAnimeInfoList,
  StAnimeInfoListUl,
} from './Anime.styles';

interface AnimeProps {
  anime: IAnime | null
  loading?: boolean
}

const Anime: React.FC<AnimeProps> = ({ anime, loading }) => {
  if (anime) {
    const {
      images,
      titles,
      synopsis,
      type,
      studios,
      aired,
      status,
      genres,
      score,
      scored_by: scoreBy,
      source,
      episodes,
      duration,
      year,
    } = anime;
    return (
      <StAnime>
        <StAnimeImg url={images.jpg.large_image_url} />
        <StAnimeInfo>
          <StAnimeInfoTitle>{titles[0].title}</StAnimeInfoTitle>
          <StAnimeInfoText>
            {titles.map((title) => (
              <span key={title.title + title.type}>
                {title.title}
                {' | '}
              </span>
            ))}
          </StAnimeInfoText>
          <StAnimeInfoText style={{ flexGrow: 1 }}>
            {synopsis}
          </StAnimeInfoText>
          <StAnimeInfoList>
            <StAnimeInfoListUl>
              <li>
                Type:
                {' '}
                {type}
              </li>
              <li>
                Studios:
                {' '}
                {studios.map((studio) => (
                  <span key={studio.mal_id}>
                    {studio.name}
                    {', '}
                  </span>
                ))}
              </li>
              <li>
                Date aired:
                {' '}
                {aired.string}
              </li>
              <li>
                Status:
                {' '}
                {status}
              </li>
              <li>
                Genre:
                {' '}
                {genres.map((genre) => (
                  <span key={genre.mal_id}>
                    {genre.name}
                    {' | '}
                  </span>
                ))}
              </li>
            </StAnimeInfoListUl>
            <StAnimeInfoListUl>
              <li>
                Score:
                {' '}
                {score}
                {' / '}
                {scoreBy}
              </li>
              <li>
                Source:
                {' '}
                {source}
              </li>
              <li>
                Episodes:
                {' '}
                {episodes}
              </li>
              <li>
                Duration:
                {' '}
                {duration}
              </li>
              <li>
                Year:
                {' '}
                {year}
              </li>
            </StAnimeInfoListUl>
          </StAnimeInfoList>
        </StAnimeInfo>
      </StAnime>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>Loading...</div>;
};

export default Anime;
