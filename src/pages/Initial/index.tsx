import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowAltCircleRight } from '@styled-icons/fa-solid';
import bg from 'assets/pictures/initialPage.jpg';

import SearchInput from 'components/SearchInput';
import Logo from 'components/Logo';
import InitialMenu from './InitialMenu';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const InitialImage = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${bg});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-height: 500px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 -10px;
    background-size: 150%;
  }
`;

const LinkToHome = styled(Link)`
  position: fixed;
  bottom: 52px;

  padding: .4em .8em;

  display: flex;
  align-items: center;
  gap: 10px;
  
  font-size: 1.6rem;
  text-decoration: none;
  color: black;

  border-radius: 20px;
  background-color: #ebb848;
  border: 3px solid var(--main-bg-color);


  transition: background-color .3s, border .3s;
  &:hover {
    background-color: #f4d591;
    border: 3px solid white;
  }

  @media only screen and (max-height: 500px) {
    display: none;
  }
`;

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
