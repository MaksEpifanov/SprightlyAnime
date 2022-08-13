import { useAppSelector } from 'app/store.hooks';
import { createNumbersArray } from 'utils/helpers/skeleton.helpers';

import Card from 'components/Card';
import SkeletonCard from 'components/Skeletons/SkeletonCard';
import { StatusLoading } from 'types/common.types';
import Error from 'components/Error';

import { Wrapper } from './List.styles';

const List: React.FC = () => {
  const { status, data, errors } = useAppSelector((state) => state.list);

  let renderData: React.ReactNode = createNumbersArray(25)
    .map((number) => <SkeletonCard key={number} />);

  if (status === StatusLoading.success) {
    renderData = data.map((item) => <Card item={item} key={item.mal_id} />);
  }
  if (status === StatusLoading.failure) {
    renderData = <Error errors={errors} />;
  }
  return (
    <Wrapper>
      {renderData}
    </Wrapper>
  );
};

export default List;
