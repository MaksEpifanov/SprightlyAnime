import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.types';

export const Wrapper = styled.div<LogoProps>`
  width: fit-content;

  font-family: var(--header-font);
  font-size: ${(props) => (props.short ? '24px' : '62px')};
  font-weight: 700;

  text-align: center;

  &::first-letter {
    color: var(--second-text-color);
  }
`;

export const LinkLogo = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const AnimeSpan = styled.span`
  color: #a8476b;
`;
