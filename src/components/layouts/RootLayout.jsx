import { Header } from '@components/layouts/Header';
import { SideBar } from '@components/layouts/sidebar/SideBar';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Header />

      <div className='root-container'>
        <SideBar />
        <main>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
