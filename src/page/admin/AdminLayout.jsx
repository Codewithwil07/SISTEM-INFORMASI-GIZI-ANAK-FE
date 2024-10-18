import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import {  Outlet } from 'react-router-dom';


const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar
        toggleSidebar={toggleSidebar}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      {/* Main Content */}
      <div
        className={` ${
          isOpen ? 'ml-64' : 'ml-20'
        } p-4 transition-all duration-30 min-h-screen bg-whitetaker w-full py-100`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
