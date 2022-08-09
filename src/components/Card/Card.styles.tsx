import styled from 'styled-components';
import { StyleCardImageProps } from './Card.types';

export const Wrapper = styled.div`
  position: relative;

  height: 300px;
  width: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--main-text-color);

  &:hover{
    cursor: pointer;

    &&>*:last-child {
      height: 80%;
    }
  }
`;

export const CardImage = styled.div<StyleCardImageProps>`
  height: 100%;
  width: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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

  border: 1px solid var(--main-text-color);
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

export const CardDownPanel = styled.div`
  padding: 5px;
  width: 100%;
  
  display: flex;
  justify-content: space-between;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  background-color: var(--second-bg-color);
  font-size: 14px;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
