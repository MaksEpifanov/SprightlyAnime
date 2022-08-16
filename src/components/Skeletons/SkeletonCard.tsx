import styled from 'styled-components';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonCardProps {
  second?: boolean
}

interface SkeletonDivProps {
  width: string
  height: string
}

const Wrapper = styled.div<SkeletonCardProps>`
  height: ${(props) => (props.second ? '100px' : '300px')};
  width: ${(props) => (props.second ? '100%' : '180px')};
  max-width: ${(props) => (props.second ? '450px' : null)};
  padding: ${(props) => (props.second ? '10px' : null)};

  display: flex;
  align-items: center;
  flex-direction: ${(props) => (!props.second ? 'column' : null)};

  background-color: ${(props) => (props.second ? 'var(--second-bg-color)' : null)};
  border: ${(props) => (props.second ? '2px solid var(--main-bg-color)' : null)};
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.second ? '100%' : '170px')};
  }
`;

const StSkeletonDiv = styled.div<SkeletonDivProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SkeletonCard = ({ second = false }: SkeletonCardProps) => {
  if (second) {
    return (
      <SkeletonTheme baseColor="#1c1c1c" highlightColor="#666666">
        <Wrapper second={second}>
          <StSkeletonDiv width={second ? '80px' : '100%'} height="80%">
            <Skeleton height="98%" width={80} />
          </StSkeletonDiv>
          <StSkeletonDiv width="100%" height="80%">
            <Skeleton />
            <br />
            <Skeleton />
          </StSkeletonDiv>
        </Wrapper>
      </SkeletonTheme>
    );
  }
  return (
    <SkeletonTheme baseColor="#1c1c1c" highlightColor="#666666">
      <Wrapper second={second}>
        <StSkeletonDiv width={second ? '80px' : '100%'} height="80%">
          <Skeleton height="98%" />
        </StSkeletonDiv>
        <StSkeletonDiv width="100%" height="10%">
          <Skeleton />
        </StSkeletonDiv>
        <StSkeletonDiv width="100%" height="10%"><Skeleton /></StSkeletonDiv>
      </Wrapper>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
