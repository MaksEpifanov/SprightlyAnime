import {
  Home, Random, ListUl, CalendarAlt,
} from '@styled-icons/fa-solid';
import { Upcoming } from '@styled-icons/material';
import {
  HeaderMenu, Logo, Menu, StyledNavLink,
} from './styled';

const Header = () => (
  <HeaderMenu>
    <Logo to="/">Sprightly</Logo>
    <Menu>
      <StyledNavLink to="/">
        <Home height={24} />
        Home
      </StyledNavLink>
      <StyledNavLink to="/genres">
        <ListUl height={24} />
        Genres
      </StyledNavLink>
      <StyledNavLink to="/upcoming">
        <Upcoming height={24} />
        Upcoming
      </StyledNavLink>
      <StyledNavLink to="/schedules">
        <CalendarAlt height={24} />
        Schedules
      </StyledNavLink>
      <StyledNavLink to="/random">
        <Random height={24} />
        Random
      </StyledNavLink>
    </Menu>
  </HeaderMenu>
);

export default Header;
