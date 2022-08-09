import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderMenu = styled.header`
  padding: 20px;
  max-height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

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
  gap: 30px;
`;
