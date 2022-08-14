import { Link } from 'react-router-dom';
import { StyledMenu, AdaptiveLink } from './BurgerMenu.styles';
import { BurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open }) => (
  <StyledMenu open={open}>
    <Link to="/home">
      Home
    </Link>
    <button type="button">Genre</button>
    <button type="button">Types</button>
    <AdaptiveLink to="/upcoming">Upcoming</AdaptiveLink>
    <AdaptiveLink to="/schedules">Schedules</AdaptiveLink>
    <Link to="/filter">
      Ongoing
    </Link>
    <AdaptiveLink to="/random">Random</AdaptiveLink>
  </StyledMenu>
);

export default BurgerMenu;
