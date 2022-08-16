import ListPage from 'components/ListPage';
import { Category } from 'services/API/animeList.service';

const HomePage = () => (
  <ListPage title="Current Season" category={Category.now} />
);

export default HomePage;
