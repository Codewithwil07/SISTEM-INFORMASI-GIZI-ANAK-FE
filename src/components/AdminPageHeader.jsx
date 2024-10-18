const DashboardHeader = () => {
  return (
    <div className='bg-black text-white py-6 px-8 rounded-lg shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Title Section */}
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold mb-2'>
            Dashboard Laporan Gizi Kabupaten Sumenep
          </h1>
          <p className='text-lg'>
            Halaman untuk melihat data gizi balita yang telah terdaftar.
          </p>
        </div>
        {/* Info Section */}
      </div>
    </div>
  );
};

const DataListHeader = () => {
  return (
    <div className='bg-black text-white py-6 px-8 rounded-lg shadow-md w-full'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Title Section */}
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl font-bold mb-2'>Daftar Data</h1>
          <p className='text-lg'>
            Halaman untuk melihat dan mengelola data gizi balita yang telah terdaftar.
          </p>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Header = ({ chidlren }) => {
  return <>{chidlren}</>;
};

export default Header;

Header.DataListHeader = DataListHeader;
Header.DashboardHeader = DashboardHeader;
