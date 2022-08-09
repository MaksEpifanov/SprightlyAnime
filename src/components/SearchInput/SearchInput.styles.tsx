import styled from 'styled-components';
import { Search } from '@styled-icons/fa-solid';
import type { SearchInputProps } from './SearchInput.types';

export const Wrapper = styled.div<SearchInputProps>`
  width: 100%;
  max-width: 640px;
  padding: 10px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  border-radius: 8px;
  background-color: ${(props) => (props.gray ? 'var(--second-bg-color)' : 'var(--main-bg-color)')};
`;

export const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Search anime...',
}) <SearchInputProps>`
  flex-grow: 1;
  
  background-color: ${(props) => (props.gray ? 'var(--second-bg-color)' : 'var(--main-bg-color)')};
  border: none;
  outline: none;

  color: var(--main-text-color);
  &::placeholder {
    color: var(--placeholder-text-color);
  }
`;

export const SearchIcon = styled(Search)`
  padding: 0 10px;

  color: var(--placeholder-text-color);

  cursor: pointer;
  
  &:hover {
    color: var(--main-text-color);
  }
`;

export const ClearButton = styled.button<SearchInputProps>`
  border: none;

  background-color: ${(props) => (props.gray ? 'var(--second-bg-color)' : 'var(--main-bg-color)')};
  color: var(--placeholder-text-color);
  
  cursor: pointer;
  &:hover {
    color: var(--main-text-color);
  }
`;
