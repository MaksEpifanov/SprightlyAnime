import { Link } from 'react-router-dom';
import { StMenu, StAdaptiveLink } from './BurgerMenu.styles';
import { BurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open }) => (
  <StMenu open={open}>
    <Link to="/home">
      Home
    </Link>
    <button type="button">Genre</button>
    <button type="button">Types</button>
    <StAdaptiveLink to="/upcoming">Upcoming</StAdaptiveLink>
    <StAdaptiveLink to="/schedules">Schedules</StAdaptiveLink>
    <Link to="/filter">
      Ongoing
    </Link>
    <StAdaptiveLink to="/random">Random</StAdaptiveLink>
  </StMenu>
);

export default BurgerMenu;
