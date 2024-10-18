import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-white shadow-md w-full'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold text-gray-900'>Logo</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href='#home' className='text-gray-800 hover:text-blue-600'>
            Home
          </a>
          <a href='#home' className='text-gray-800 hover:text-blue-600'>
            Data Tabel
          </a>
          <a href='#services' className='text-gray-800 hover:text-blue-600'>
            Data Grafik
          </a>
          <a href='#about' className='text-gray-800 hover:text-blue-600'>
            Map
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-gray-800 focus:outline-none'
        >
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 p-4`}
      >
        <a href='#home' className='block text-gray-800 py-2'>
          Home
        </a>
        <a href='#home' className='block text-gray-800 py-2'>
          Data Tabel
        </a>
        <a href='#services' className='block text-gray-800 py-2'>
          Data Grafik
        </a>
        <a href='#about' className='block text-gray-800 py-2'>
          Map
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
