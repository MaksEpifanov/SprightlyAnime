import styled from 'styled-components';

export const StAnime = styled.main`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  padding: 20px;

  display: flex;
  border-radius: 10px;

  background-color: var(--second-bg-color);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StAnimeImg = styled.div<{ url: string }>`
  min-height: 50vh;
  max-height: 60vh;

  flex-basis: 250px;
  flex-shrink: 0;
  
  border-radius: 10px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StAnimeInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StAnimeInfoTitle = styled.h3`
  font-size: 32px;
  font-weight: 400;
`;

export const StAnimeInfoText = styled.p`
  color: var(--main-text-color);
  font-size: 16px;
`;

export const StAnimeInfoList = styled.div`
  display: flex;
  gap: 20px;
`;

export const StAnimeInfoListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  list-style: none;
  color: var(--main-text-color);
  font-size: 14px;
`;
