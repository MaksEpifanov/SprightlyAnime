import ListPage from 'components/ListPage';
import { Category } from 'services/API/animeList.service';

const UpcomingPage = () => (
  <ListPage title="Upcoming" category={Category.upcoming} />
);

export default UpcomingPage;
