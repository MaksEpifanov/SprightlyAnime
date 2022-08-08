import { Random, CalendarAlt } from '@styled-icons/fa-solid';
import { Upcoming } from '@styled-icons/material';

import {
  HeaderMenu, Logo, Menu, StyledNavLink,
} from './styled';

const Header = () => (
  <HeaderMenu>
    <Logo to="/home">Sprightly</Logo>
    {/* Search Panel */}
    <Menu>
      <StyledNavLink to="/upcoming">
        <Upcoming height={20} />
        Upcoming
      </StyledNavLink>
      <StyledNavLink to="/schedules">
        <CalendarAlt height={20} />
        Schedules
      </StyledNavLink>
      <StyledNavLink to="/random">
        <Random height={20} />
        Random
      </StyledNavLink>
    </Menu>
    {/* Burger Menu */}
  </HeaderMenu>
);

export default Header;
