import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const Title = styled.h2`
  color: var(--main-text-color);
`;

export const TitleWithPagination = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
