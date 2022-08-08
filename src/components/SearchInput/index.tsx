import {
  ChangeEventHandler, MouseEventHandler, useState, useRef,
} from 'react';

import {
  Wrapper, Input, ClearButton, SearchIcon,
} from './styled';

export type SearchInputProps = {
  gray?: boolean
};

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
      <SearchIcon height={20} />
      <Input value={inputText} onChange={handleInput} ref={inputEl} gray={gray} />
      <ClearButton onClick={onClearInput} gray={gray}>Clear</ClearButton>
    </Wrapper>
  );
};
export default SearchInput;
