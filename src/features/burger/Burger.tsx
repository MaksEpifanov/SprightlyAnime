import { StBurger } from './Burger.styles';
import { BurgerProps } from './Burger.types';

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <StBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StBurger>
);

export default Burger;
