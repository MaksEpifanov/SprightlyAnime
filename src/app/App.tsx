import { Routes, Route } from 'react-router-dom';
import Layout from '../common/components/Layout';
import AnimeInfoPage from '../pages/AnimeInfo';
import HomePage from '../pages/Home';
import SchedulesPage from '../pages/Schedules';
import UpcomingPage from '../pages/Upcoming';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="anime/:id" element={<AnimeInfoPage />} />
      <Route path="upcoming" element={<UpcomingPage />} />
      <Route path="schedules" element={<SchedulesPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
);

export default App;
