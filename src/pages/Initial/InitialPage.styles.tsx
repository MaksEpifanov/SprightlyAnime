import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from 'assets/pictures/initialPage.jpg';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const InitialImage = styled.div`
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

export const LinkToHome = styled(Link)`
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
