import { IAnime } from 'types/anime.types';
import Card from 'components/Card';
import SkeletonCard from 'components/Skeletons/SkeletonCard';
import type { ListProps } from './List.types';
import { Wrapper } from './List.styles';

const skeletonsRender = new Array(25)
  .map((n, ind) => ind)
  .map((number) => <SkeletonCard key={number} />);

const List: React.FC<ListProps<IAnime[]>> = (props) => {
  const { isLoading = false, isFailed = false, data = [] } = props;
  const dataRender = data.map((item) => (
    <Card item={item} key={item.mal_id} />
  ));

  if (isLoading) {
    return (<Wrapper>{skeletonsRender}</Wrapper>);
  } if (isFailed) {
    return (<div>Errors....</div>);
  }
  return (
    <Wrapper>
      {dataRender}
    </Wrapper>
  );
};

export default List;
