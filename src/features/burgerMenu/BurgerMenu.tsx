import { Link } from 'react-router-dom';
import { StyledMenu } from './BurgerMenu.styles';
import { BurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open }) => (
  <StyledMenu open={open}>
    <Link to="/home">
      About us
    </Link>
    <Link to="/">
      About us
    </Link>
    <Link to="/">
      About us
    </Link>
  </StyledMenu>
);

export default BurgerMenu;
