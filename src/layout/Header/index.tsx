import { useState, useRef, HTMLAttributes } from 'react';
import { Random, CalendarAlt } from '@styled-icons/fa-solid';
import { Upcoming } from '@styled-icons/material';

import MenuLink from 'components/MenuLink';
import Logo from 'components/Logo';

import Burger from 'features/burger';
import BurgerMenu from 'features/burgerMenu';

import useOnClickOutside from 'hooks/useOnClickOutside';
import {
  Wrapper, Menu,
} from './Header.styles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLDivElement>(null);
  useOnClickOutside(burger, () => setOpen(false));

  return (
    <Wrapper>
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
        <div ref={burger}>
          <Burger open={open} setOpen={setOpen} />
          <BurgerMenu open={open} />
        </div>
      </Menu>
    </Wrapper>
  );
};

export default Header;
