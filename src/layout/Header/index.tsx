import { Random, CalendarAlt } from '@styled-icons/fa-solid';
import { Upcoming } from '@styled-icons/material';

import MenuLink from 'components/MenuLink';
import Logo from 'components/Logo';

import {
  HeaderMenu, Menu,
} from './Header.styles';

const Header = () => (
  <HeaderMenu>
    <Logo short />
    {/* Search Panel */}
    <Menu>
      <MenuLink to="/upcoming">
        <Upcoming height={20} />
        Upcoming
      </MenuLink>
      <MenuLink to="/schedules">
        <CalendarAlt height={20} />
        Schedules
      </MenuLink>
      <MenuLink to="/random">
        <Random height={20} />
        Random
      </MenuLink>
    </Menu>
    {/* Burger Menu */}
  </HeaderMenu>
);

export default Header;
