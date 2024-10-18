const HomePage = () => {
  return (
    <div className='bg-gray-50'>
      {/* Hero Section */}
      <header className='bg-blue-800 text-white py-24 px-6 text-center'>
        <h1 className='text-4xl font-bold mb-6 sm:text-3xl md:text-4xl'>
          Data Gizi Anak di Kabupaten Sumenep
        </h1>
        <p className='text-lg mb-8 sm:text-md md:text-lg'>
          Menyediakan informasi terkini tentang status gizi anak di Kabupaten
          Sumenep.
        </p>
        <button className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300'>
          Lihat Data
        </button>
      </header>

      {/* Data Section */}
      <section className='max-w-7xl mx-auto px-6 py-20'>
        <h2 className='text-3xl font-semibold text-center mb-12 sm:text-2xl md:text-3xl'>
          Status Gizi Anak di Kabupaten Sumenep
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>
              Balita Underweight
            </h3>
            <p className='text-gray-600'>
              Jumlah balita dengan status gizi kurang di Kabupaten Sumenep.
            </p>
            <div className='mt-4 text-center text-2xl font-semibold text-blue-700'>
              300
            </div>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>
              Balita Stunting
            </h3>
            <p className='text-gray-600'>
              Jumlah balita dengan status gizi stunting di Kabupaten Sumenep.
            </p>
            <div className='mt-4 text-center text-2xl font-semibold text-blue-700'>
              1200
            </div>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>
              Balita Gizi Buruk
            </h3>
            <p className='text-gray-600'>
              Jumlah balita dengan status gizi lebih di Kabupaten Sumenep.
            </p>
            <div className='mt-4 text-center text-2xl font-semibold text-blue-700'>
              150
            </div>
          </div>
          <div className='bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
            <h3 className='text-xl font-medium text-gray-800 mb-4'>
              Balita Gizi Kurang
            </h3>
            <p className='text-gray-600'>
              Jumlah balita dengan status gizi Kurang di Kabupaten Sumenep.
            </p>
            <div className='mt-4 text-center text-2xl font-semibold text-blue-700'>
              150
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chart Section */}
      <section className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-semibold text-center mb-12 sm:text-2xl md:text-3xl'>
            Tren Gizi Anak di Kabupaten Sumenep
          </h2>
          <div className='relative'>
            <div className='h-64 bg-gray-200 rounded-lg flex items-center justify-center text-lg text-gray-600'>
              <p>
                Chart Gizi Anak (Fitur Interaktif akan ditambahkan di kemudian
                hari)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
