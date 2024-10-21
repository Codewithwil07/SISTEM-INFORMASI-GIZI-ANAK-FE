import logo from '../assets/LOGOKAB.png';

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md w-screen'>
      <div className='py-3 flex gap-x-2 items-center mx-10'>
        {/* Logo */}
        <img src={logo} className='w-10 h-12' />

        <h1 className='font-bold text-base md:text-3xl'>
          PEMERINTAH KABUPATEN SUMENEP
        </h1>

        {/* Desktop Menu
        <div className='hidden md:flex space-x-5'>
          <a href='/' className='text-gray-800 hover:text-blue-600'>
            Home
          </a>
          <a href='/data-list' className='text-gray-800 hover:text-blue-600'>
            Data Tabel
          </a>
          <a href='/data=grafik' className='text-gray-800 hover:text-blue-600'>
            Data Grafik
          </a>
          <a href='/map' className='text-gray-800 hover:text-blue-600'>
            Map
          </a>
        </div> */}

        {/* Mobile Menu Toggle Button */}
        {/* <button
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
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 p-4`}
      >
        <a href='/' className='block text-gray-800 py-2'>
          Home
        </a>
        <a href='/data-list' className='block text-gray-800 py-2'>
          Data Tabel
        </a>
        <a href='/data-grafik' className='block text-gray-800 py-2'>
          Data Grafik
        </a>
        <a href='/map' className='block text-gray-800 py-2'>
          Map
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
