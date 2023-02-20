import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Layout () {
  <ToastContainer />
  return (
    <div className="w-screen h-screen bg-gray-50">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
}
