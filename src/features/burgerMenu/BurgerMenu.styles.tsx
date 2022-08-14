import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav<{ open: boolean }>`
  z-index: -3;

  position: absolute;
  top: 110%;
  right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 1px solid var(--second-text-color);
  border-radius: 10px;
  background: var(--second-bg-color);
  text-align: left;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(150%)')};

  &>* {
    padding: 0.9rem 1.2rem;

    border: none;
    border-radius: 10px;

    background: inherit;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
    color: var(--main-text-color);
    
    
    cursor: pointer;
    
    transition: color .3s linear, background-color .3s linear;
    &:hover {
      color: var(--second-text-color);
      background-color: var(--main-bg-color);
    }
  }
`;

export const AdaptiveLink = styled(Link)`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
