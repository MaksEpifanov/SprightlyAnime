import { Routes, Route } from 'react-router-dom';
import {
  AnimeInfoPage, HomePage, InitialPage, RandomPage, SchedulesPage, UpcomingPage,
} from 'pages';
import Layout from 'layout';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<InitialPage />} />
    <Route path="/*" element={<Layout />}>
      <Route path="home" element={<HomePage />} />
      <Route path="upcoming" element={<UpcomingPage />} />
      <Route path="schedules" element={<SchedulesPage />} />
      <Route path="random" element={<RandomPage />} />
      <Route path="anime/:id" element={<AnimeInfoPage />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
);

export default App;
