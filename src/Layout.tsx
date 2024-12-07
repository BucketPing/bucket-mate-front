import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='max-w-[426px] my-0 mx-auto'>
      {/* header */}
      <Outlet />
    </div>
  );
};

export default Layout;
