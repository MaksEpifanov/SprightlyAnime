import { IAnime } from 'types/anime.types';
import Card from 'components/Card';
import type { ListProps } from './List.types';
import { Wrapper } from './List.styles';

const List: React.FC<ListProps<IAnime[]>> = (props) => {
  const { isLoading = false, isFailed = false, data = [] } = props;
  const dataRender = data.map((item) => (
    <Card item={item} key={item.mal_id} second />
  ));

  if (isLoading) {
    return (<div>Loading...</div>);
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
