import {
  ChangeEventHandler, MouseEventHandler, useState, useRef,
} from 'react';

import {
  Wrapper, StInput, StClearButton, StSearchIcon,
} from './SearchInput.styles';
import { SearchInputProps } from './SearchInput.types';

const SearchInput: React.FC<SearchInputProps> = ({ gray = false }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>('');

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  const onClearInput: MouseEventHandler<HTMLButtonElement> = () => {
    setInputText('');
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  };

  return (
    <Wrapper gray={gray}>
      <StSearchIcon height={20} />
      <StInput value={inputText} onChange={handleInput} ref={inputEl} gray={gray} />
      <StClearButton onClick={onClearInput} gray={gray}>Clear</StClearButton>
    </Wrapper>
  );
};
export default SearchInput;
