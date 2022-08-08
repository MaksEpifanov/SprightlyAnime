import styled from 'styled-components';

interface LogoProps {
  short?: boolean
}

const Wrapper = styled.div<LogoProps>`
  width: fit-content;

  font-family: var(--header-font);
  font-size: ${(props) => (props.short ? '24px' : '62px')};
  font-weight: 700;

  text-align: center;

  &::first-letter {
    color: var(--second-text-color);
  }
`;

const AnimeSpan = styled.span`
  color: #a8476b;
`;

const Logo: React.FC<LogoProps> = ({ short = false }) => (
  <Wrapper short={short}>
    Springtly
    {!short && <AnimeSpan>{' anime'}</AnimeSpan>}
  </Wrapper>
);

export default Logo;
