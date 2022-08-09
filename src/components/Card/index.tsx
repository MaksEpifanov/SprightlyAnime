// import { Star } from '@styled-icons/fa-solid';
import { Star, ArrowUpward } from '@styled-icons/material';
import type { CardProps } from './Card.types';
import {
  Wrapper,
  CardImage,
  CardDownPanel,
  Score,
  Title,
  CardHoverInfo,
  InfoLi,
} from './Card.styles';

const Card: React.FC<CardProps> = ({ second, item }) => (
  <Wrapper>
    <CardImage linkImg={item.images.webp.large_image_url} />
    <CardDownPanel>
      <Score>
        <Star height={14} color="gold" />
        {item.score}
        <ArrowUpward height={14} />
        {item.rank}
      </Score>
      <span>{item.type}</span>
    </CardDownPanel>
    <Title>{item.title_english}</Title>
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
            <>
              {genr.name}
              {' | '}
            </>
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

export default Card;
