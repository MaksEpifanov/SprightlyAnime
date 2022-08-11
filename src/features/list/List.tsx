import Card from 'components/Card';
import SkeletonCard from 'components/Skeletons/SkeletonCard';
import { useAppSelector } from 'app/store.hooks';
import { StatusLoading } from 'types/common.types';
import { Wrapper, TitleWrapper } from './List.styles';

const skeletonData = new Array(25)
  .fill(null)
  .map((n, ind) => ind);

interface ListProps {
  title: string
}

const List: React.FC<ListProps> = ({ title }) => {
  const {
    status, data, errors, pagination,
  } = useAppSelector((state) => state.list);

  const dataRender = data.map((item) => (
    <Card item={item} key={item.mal_id} />
  ));

  const skeletonsRender = skeletonData.map((number) => <SkeletonCard key={number} />);

  if (status === StatusLoading.success) {
    console.log(pagination);
    return (
      <>
        <TitleWrapper>
          <h2>{title}</h2>
        </TitleWrapper>
        <Wrapper>
          {dataRender}
        </Wrapper>
      </>
    );
  } if (status === StatusLoading.failure) {
    return (<div>Errors....</div>);
  }
  return (<Wrapper>{skeletonsRender}</Wrapper>);
};

export default List;
