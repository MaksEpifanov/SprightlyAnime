import { Star, ArrowUpward } from '@styled-icons/material';
import { getCurrentDate } from 'utils/helpers/date.helpers';
import type { CardProps } from './Card.types';
import {
  Wrapper,
  CardImage,
  CardDownPanelStats,
  Title,
  CardHoverInfo,
  InfoLi,
  CardDownPanelWrapper,
  CardSecondInfo,
} from './Card.styles';

const Card: React.FC<CardProps> = ({ second = false, item }) => {
  if (second) {
    return (
      <Wrapper second={second}>
        <CardImage linkImg={item.images.webp.large_image_url} second={second} />
        <CardSecondInfo>
          <Title>{item.title_english}</Title>
          <CardDownPanelStats second={second}>
            <li>{item.type}</li>
            <li>{getCurrentDate(item.aired.from)}</li>
          </CardDownPanelStats>
        </CardSecondInfo>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CardImage linkImg={item.images.webp.large_image_url} />
      <CardDownPanelWrapper>
        <CardDownPanelStats>
          <Star height={14} color="gold" />
          {item.score}
          <ArrowUpward height={14} />
          {item.rank}
        </CardDownPanelStats>
        <span>{item.type}</span>
      </CardDownPanelWrapper>
      <Title>{item.titles[0].title}</Title>
      <CardHoverInfo>
        <div style={{
          padding: '5px', display: 'flex', flexDirection: 'column', gap: '5px',
        }}
        >
          <InfoLi>
            <span>Other names: </span>
            {item.titles[1].title}
          </InfoLi>
          <InfoLi>
            <span>Airing: </span>
            {getCurrentDate(item.aired.from)}
          </InfoLi>
          <InfoLi>
            <span>Rating: </span>
            {item.rating}
          </InfoLi>
          <InfoLi>
            <span>Duration: </span>
            {item.duration}
          </InfoLi>
          <InfoLi>
            <span>Status: </span>
            {item.status}
          </InfoLi>
          <InfoLi>
            <span>Genre: </span>
            {item.genres.map((genr) => (
              <span key={genr.mal_id}>
                {genr.name}
                {'  '}
              </span>
            ))}
          </InfoLi>
          <InfoLi>
            <span>Popularity: </span>
            {item.popularity}
          </InfoLi>
          <InfoLi>
            <span>Score: </span>
            {item.score}
            {' / '}
            {item.scored_by}
          </InfoLi>
        </div>
      </CardHoverInfo>
    </Wrapper>
  );
};

export default Card;