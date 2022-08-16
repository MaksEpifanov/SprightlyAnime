import Link from './MenuLink.styles';
import { MenuLinkProps } from './MenuLink.types';

const MenuLink: React.FC<MenuLinkProps> = ({
  to, children, icon, white = false,
}) => (
  <Link to={to} $white={white}>
    {icon && icon}
    {children}
  </Link>
);

export default MenuLink;
