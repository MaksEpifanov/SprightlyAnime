import styled from 'styled-components';
import MenuLink from 'components/MenuLink';

const Wrapper = styled.nav`
  display: flex;
  gap: 20px;
`;

const InitialMenu = () => (
  <Wrapper>
    <MenuLink to="/home">Home</MenuLink>
    <MenuLink to="/trending">Trending</MenuLink>
    <MenuLink to="/ongoing">Ongoing</MenuLink>
  </Wrapper>
);

export default InitialMenu;
