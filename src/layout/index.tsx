import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

const Layout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Aside />
    <Footer />
  </>
);

export default Layout;
