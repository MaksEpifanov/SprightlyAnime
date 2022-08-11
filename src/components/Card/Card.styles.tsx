import styled from 'styled-components';
import { StyleCardImageProps, SecondBaseDivProps } from './Card.types';

export const Wrapper = styled.div<SecondBaseDivProps>`
  position: relative;

  height: ${(props) => (props.second ? '100px' : '300px')};
  width: ${(props) => (props.second ? '100%' : '180px')};
  max-width: ${(props) => (props.second ? '450px' : null)};
  padding: ${(props) => (props.second ? '10px' : null)};

  display: flex;
  align-items: center;
  flex-direction: ${(props) => (!props.second ? 'column' : null)};
  
  border: ${(props) => (props.second ? '2px solid var(--main-bg-color)' : null)};
  border-radius: 10px;
  color: var(--main-text-color);

  background-color: ${(props) => (props.second ? 'var(--second-bg-color)' : null)};
  overflow: hidden;
  transition: border .2s, transform .1s;
  &:hover{
    border: ${(props) => (props.second ? '2px solid var(--second-text-color)' : null)};
    cursor: pointer;

    &&>*:last-child {
      ${(props) => (!props.second ? 'height: 80%' : null)};
    }
  }

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.second ? '100%' : '170px')};

    &:hover{
      &&>*:last-child {
      ${(props) => (!props.second ? 'height: 0' : null)};
      }

      &:active {
      transform: scale(.95);
      }
    }
  }
`;

export const CardImage = styled.div<StyleCardImageProps>`
  height: 100%;
  width: ${(props) => (!props.second ? '100%' : '80px')};
  
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: ${(props) => (props.second ? '10px' : null)};

  background-image: url(${(props) => props.linkImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;

export const CardHoverInfo = styled.ul`
  position: absolute;
  bottom: 20%;

  height: 0;

  display: flex;
  flex-direction: column;
  gap: 5px;

  border: 1px solid var(--second-text-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  overflow: hidden;
  opacity: 0.95;
  background-color: var(--main-bg-color);

  transition: height .3s;
`;

export const InfoLi = styled.li`
  list-style: none;

  font-size: 14px;
  color: white;

  &>span {
    color: var(--main-text-color);
  }
`;

export const CardDownPanelWrapper = styled.div`
  padding: 5px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  background-color: var(--second-bg-color);
  font-size: 14px;
`;

export const CardDownPanelStats = styled.div<SecondBaseDivProps>`
  margin-left: ${(props) => (props.second ? '20px' : null)};

  display: flex;
  align-items: center;
  gap: ${(props) => (props.second ? '30px' : '5px')};

  color: ${(props) => (props.second ? 'var(--placeholder-text-color)' : null)};
`;

export const CardSecondInfo = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &>*:first-child {
  font-size: 20px;
  }
`;

export const Title = styled.div`
  margin: 10px 0;
  width: 100%;

  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const some = 0;
