import { StyledBurger } from './Burger.styles';
import { BurgerProps } from './Burger.types';

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
