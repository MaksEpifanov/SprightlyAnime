import StLink from './MenuLink.styles';
import { MenuLinkProps } from './MenuLink.types';

const MenuLink: React.FC<MenuLinkProps> = ({
  to, children, icon, white = false,
}) => (
  <StLink to={to} $white={white}>
    {icon && icon}
    {children}
  </StLink>
);

export default MenuLink;
