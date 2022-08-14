import styled from 'styled-components';

export const StyledBurger = styled.div`
  padding: 0;
  width: 2rem;
  height: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    transform-origin: 1px;
    
    width: 2rem;
    height: .25rem;

    background: var(--main-text-color);
    border-radius: 10px;
    transition: all .3s linear;
  }
`;

export const Ex = styled.div`
  
`;
