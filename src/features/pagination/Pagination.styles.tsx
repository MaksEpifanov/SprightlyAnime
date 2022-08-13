import styled from 'styled-components';
import { DoubleArrow } from '@styled-icons/material';

export const Wrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  color: var(--main-text-color);
`;

export const ArrowButton = styled.button`
  height: 100%;
  width: 30px;
  padding: 8px;

  display: flex;

  border: none;
  background-color: var(--second-bg-color);
  color: var(--main-text-color);

  transition: background-color .4s, color .4s;

  &:not([disabled]) {
    cursor: pointer;
  }

  &:hover:not([disabled]) {
    background-color: var(--second-text-color);
    color: white;
  }

  &[disabled] {
    color: var(--main-bg-color);
  }
`;

export const CurrentPage = styled.div`
  height: 100%;
  padding: 0 10px;

  display: flex;
  align-items: center;

  background-color: var(--second-bg-color);
`;

export const DbArrow = styled(DoubleArrow) <{ left?: boolean }>`
  ${(props) => (props.left ? 'transform: rotate(180deg)' : null)};
`;
