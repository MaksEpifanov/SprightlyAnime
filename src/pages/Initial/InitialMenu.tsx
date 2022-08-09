import styled from 'styled-components';
import MenuLink from 'components/MenuLink';

const Wrapper = styled.nav`
  display: flex;
  gap: 20px;
`;

const InitialMenu = () => (
  <Wrapper>
    <MenuLink white to="/home">Home</MenuLink>
    <MenuLink white to="/trending">Trending</MenuLink>
    <MenuLink white to="/ongoing">Ongoing</MenuLink>
  </Wrapper>
);

export default InitialMenu;
