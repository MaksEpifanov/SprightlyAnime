import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;

  transition: color .3s;

  &:hover {
    color: var(--second-text-color);
  }
`;

interface MenuLinkProps {
  to: string
  children: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, children }) => (
  <Link to={to}>{children}</Link>
);

export default MenuLink;
