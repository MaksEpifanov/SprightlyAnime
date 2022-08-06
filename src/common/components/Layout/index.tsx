import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
