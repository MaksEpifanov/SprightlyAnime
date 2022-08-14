import styled from 'styled-components';

export const StyledBurger = styled.div<{ open: boolean }>`
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
  

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(-20px)' : 'translateX(0)')};
    } 
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Ex = styled.div`
  
`;
