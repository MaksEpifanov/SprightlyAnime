import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavLinkStyledProps } from './MenuLink.types';

export default styled(NavLink) <NavLinkStyledProps>`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 18px;
  text-decoration: none;
  color: ${(props) => (!props.$white ? 'var(--main-text-color)' : 'white')};

  transition: color .3s, transform .4s;

  &:hover {
    color: var(--second-text-color);
    transform: scale(1.05)
  }

  &[aria-current] {
    color: var(--active-text-color);
    &:hover {
      transform: none;
    }
  }
`;
