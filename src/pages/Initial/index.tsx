import { ArrowAltCircleRight } from '@styled-icons/fa-solid';

import SearchInput from 'components/SearchInput';
import Logo from 'components/Logo';
import InitialMenu from './InitialMenu';
import { InitialImage, LinkToHome, Wrapper } from './InitialPage.styles';

const InitialPage = () => (
  <Wrapper>
    <Logo />
    <InitialMenu />
    <SearchInput gray />
    <InitialImage />
    <LinkToHome to="/home">
      Go to homepage
      <ArrowAltCircleRight width={36} />
    </LinkToHome>
  </Wrapper>
);

export default InitialPage;
