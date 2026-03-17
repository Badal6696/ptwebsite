import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-cream relative">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
