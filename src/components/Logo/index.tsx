import { AnimeSpan, Wrapper } from './Logo.styles';
import type { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ short = false }) => (
  <Wrapper short={short}>
    Springtly
    {!short && <AnimeSpan>{' anime'}</AnimeSpan>}
  </Wrapper>
);

export default Logo;
