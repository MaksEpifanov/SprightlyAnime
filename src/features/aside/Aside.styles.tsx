import styled from 'styled-components';

export const Wrapper = styled.aside`
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const TopList = styled.div`
  width: 350px;
  margin-right: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h3`
  padding: 10px 0;
  color: var(--main-text-color);
`;
