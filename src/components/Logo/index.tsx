import { AnimeSpan, Wrapper, LinkLogo } from './Logo.styles';
import type { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ short = false }) => (
  <Wrapper short={short}>
    <LinkLogo to="/home">
      Springtly
      {!short && <AnimeSpan>{' anime'}</AnimeSpan>}
    </LinkLogo>
  </Wrapper>
);

export default Logo;
