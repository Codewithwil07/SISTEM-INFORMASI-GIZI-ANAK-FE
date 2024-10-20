import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiList, FiMenu, FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/features/auth/auth.slice';
import { getData } from '../redux/features/gizi/giziAPI';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleSidebar, isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth/login');
  };

  const handleGetData = () => {
    dispatch(getData());
  };

  return (
    <div
      className={`flex flex-col h-full bg-black text-gray-100 z-50  ${
        isOpen ? 'w-64' : 'w-20'
      } transition-all duration-300 fixed`}
    >
      {/* Sidebar Header */}
      <div className='flex justify-between items-center p-4'>
        <span
          className={`text-lg font-bold ${!isOpen && 'hidden'} transition-all`}
        >
          Admin Panel
        </span>
        <button onClick={toggleSidebar} className='text-xl px-3'>
          <FiMenu />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className='mt-10 space-y-4 flex flex-col'>
        <NavLink
          to='/admin/dashboard'
          onClick={handleGetData}
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-7 hover:bg-whitetaker ${
              isActive ? 'bg-whitetaker' : ''
            }`
          }
        >
          <FiHome className='text-xl' />
          <span className={`${!isOpen && 'hidden'}`}>Dashboard</span>
        </NavLink>

        <NavLink
          to='/admin/data-list'
          onClick={handleGetData}
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-7 hover:bg-whitetaker ${
              isActive ? 'bg-whitetaker' : ''
            }`
          }
        >
          <FiList className='text-xl' />
          <span className={`${!isOpen && 'hidden'}`}>Data Gizi</span>
        </NavLink>

        <NavLink
          to='/'
          onClick={handleLogout}
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-7 hover:bg-whitetaker relative top-[26rem] ${
              isActive ? 'bg-whitetaker' : ''
            }`
          }
        >
          <FiLogOut className='text-xl' />
          <span className={`${!isOpen && 'hidden'}`}>Logout</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
