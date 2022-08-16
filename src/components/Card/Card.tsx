import { Star, ArrowUpward } from '@styled-icons/material';
import { getCurrentDate } from 'utils/helpers/date.helpers';
import type { CardProps } from './Card.types';
import {
  Wrapper,
  StCardImage,
  StCardDownPanelStats,
  StTitle,
  StCardHoverInfo,
  StInfoLi,
  StCardDownPanelWrapper,
  StCardSecondInfo,
} from './Card.styles';

const Card: React.FC<CardProps> = ({ second = false, item }) => {
  if (second) {
    return (
      <Wrapper second={second}>
        <StCardImage linkImg={item.images.webp.large_image_url} second={second} />
        <StCardSecondInfo>
          <StTitle>{item.title_english}</StTitle>
          <StCardDownPanelStats second={second}>
            <li>{item.type}</li>
            <li>{getCurrentDate(item.aired.from)}</li>
          </StCardDownPanelStats>
        </StCardSecondInfo>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <StCardImage linkImg={item.images.webp.large_image_url} />
      <StCardDownPanelWrapper>
        <StCardDownPanelStats>
          <Star height={14} color="gold" />
          {item.score}
          <ArrowUpward height={14} />
          {item.rank}
        </StCardDownPanelStats>
        <span>{item.type}</span>
      </StCardDownPanelWrapper>
      <StTitle>{item.titles[0].title}</StTitle>
      <StCardHoverInfo>
        <div style={{
          padding: '5px', display: 'flex', flexDirection: 'column', gap: '5px',
        }}
        >
          <StInfoLi>
            <span>Other names: </span>
            {item.titles[1].title}
          </StInfoLi>
          <StInfoLi>
            <span>Airing: </span>
            {getCurrentDate(item.aired.from)}
          </StInfoLi>
          <StInfoLi>
            <span>Rating: </span>
            {item.rating}
          </StInfoLi>
          <StInfoLi>
            <span>Duration: </span>
            {item.duration}
          </StInfoLi>
          <StInfoLi>
            <span>Status: </span>
            {item.status}
          </StInfoLi>
          <StInfoLi>
            <span>Genre: </span>
            {item.genres.map((genr) => (
              <span key={genr.mal_id}>
                {genr.name}
                {'  '}
              </span>
            ))}
          </StInfoLi>
          <StInfoLi>
            <span>Popularity: </span>
            {item.popularity}
          </StInfoLi>
          <StInfoLi>
            <span>Score: </span>
            {item.score}
            {' / '}
            {item.scored_by}
          </StInfoLi>
        </div>
      </StCardHoverInfo>
    </Wrapper>
  );
};

export default Card;
