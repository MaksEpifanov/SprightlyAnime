import { StAnimeSpan, Wrapper, StLinkLogo } from './Logo.styles';
import type { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ short = false }) => (
  <Wrapper short={short}>
    <StLinkLogo to="/home">
      Springtly
      {!short && <StAnimeSpan>{' anime'}</StAnimeSpan>}
    </StLinkLogo>
  </Wrapper>
);

export default Logo;
