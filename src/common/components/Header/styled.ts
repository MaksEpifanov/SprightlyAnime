import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderMenu = styled.header`
  /* margin: -10px -10px 20px; */
  padding: 20px;
  max-height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 20px;
  background-color: var(--second-bg-color);
  `;

export const Logo = styled(Link)`
  margin: -10px 0;
  max-width: 100px;
  
  font-family: 'Arima', cursive;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: var(--second-text-color);
  text-decoration: none;
`;

export const Menu = styled.nav`
  display: flex;  
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;

  font-size: 20px;
  text-decoration: none;
  color: var(--main-text-color);
  transition: color .3s, transform .4s;

  &:hover {
    color: var(--second-text-color);
    transform: scale(1.05)
  }

  &[aria-current] {
    color: var(--active-text-color);
  }

  &>*:first-child {
    margin-right: 5px;
  }

  &:not(:last-child) {
    margin-right: 20px
  }
`;
