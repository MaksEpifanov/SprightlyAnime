import { Outlet } from 'react-router-dom';
import { Aside } from 'features/aside';
import Header from './Header';
import Footer from './Footer';
import { Content } from './Layout.styles';

const Layout: React.FC = () => (
  <>
    <Header />
    <Content>
      <Outlet />
      <Aside />
    </Content>
    <Footer />
  </>
);

export default Layout;
