import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout () {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <Header />
      <Outlet />
    </div>
  );
}
