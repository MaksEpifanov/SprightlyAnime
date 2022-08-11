import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 -10px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const WrapperInner = styled.div`
`;
