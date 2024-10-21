import { useDispatch, useSelector } from 'react-redux';
import GiziBarChartKabupaten from '../components/GiziBarChart';
import {
  selectGiziItem,
  selectGiziStatus,
} from '../redux/features/gizi/giziSelector';
import { useEffect } from 'react';
import { getData } from '../redux/features/gizi/giziAPI';
import Map from './Map';
import Button from '../components/Button';

const HomePage = () => {
  const item = useSelector(selectGiziItem);
  const status = useSelector(selectGiziStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const total_BBKurang = item.reduce((acc, item) => {
    return acc + item.bb_u_kurang;
  }, 0);
  const a = total_BBKurang.toLocaleString('id-ID');

  const total_TBPendek = item.reduce((acc, item) => {
    return acc + item.tb_u_pendek;
  }, 0);
  const b = total_TBPendek.toLocaleString('id-ID');

  const total_GiziBuruk = item.reduce((acc, item) => {
    return acc + item.bb_tb_gizi_buruk;
  }, 0);
  const c = total_GiziBuruk.toLocaleString('id-ID');

  const total_GiziKurang = item.reduce((acc, item) => {
    return acc + item.bb_tb_gizi_kurang;
  }, 0);
  const d = total_GiziKurang.toLocaleString('id-ID');

  if (status === 'loading') {
    return <p className='text-center py-20'>Loading...</p>;
  }

  const smoothScroll = (section) => {
    const scroll = document.getElementById(section);
    scroll.scrollIntoView({ behavior: 'smooth' });
  };

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
        <Button
          onClick={() => smoothScroll('gizi-bar')}
          className='bg-yellow-500 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition duration-300'
        >
          Lihat Data
        </Button>
      </header>

      {/* Data Section */}
      <section className='max-w-7xl mx-auto px-6 py-20'>
        <h2 className='text-3xl font-semibold text-center mb-12 sm:text-2xl md:text-3xl'>
          Status Gizi Anak di Kabupaten Sumenep
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {[
            {
              title: 'Balita Underweight',
              description:
                'Jumlah balita dengan status berat badan kurang di Kabupaten Sumenep.',
              value: a,
            },
            {
              title: 'Balita Stunting',
              description:
                'Jumlah balita dengan status gizi stunting di Kabupaten Sumenep.',
              value: b,
            },
            {
              title: 'Balita Gizi Buruk',
              description:
                'Jumlah balita dengan status gizi buruk di Kabupaten Sumenep.',
              value: c,
            },
            {
              title: 'Balita Gizi Kurang',
              description:
                'Jumlah balita dengan status gizi kurang di Kabupaten Sumenep.',
              value: d,
            },
          ].map((item) => (
            <div
              key={item.title}
              className='bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300'
            >
              <h3 className='text-xl font-medium text-gray-800 mb-4'>
                {item.title}
              </h3>
              <p className='text-gray-600'>{item.description}</p>
              <div className='mt-4 text-center text-2xl font-semibold text-blue-700'>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Chart Section */}
      <section
        className='bg-white pt-24 pb-72 grid grid-rows-2 gap-y-20'
        id='gizi-bar'
      >
        <h2 className='text-3xl font-semibold mb-44 text-center hidden md:block sm:text-2xl md:text-3xl'>
          Tren Gizi Anak di Kabupaten Sumenep
        </h2>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='relative'>
            <div className='h-64 bg-gray-200 rounded-lg flex items-center justify-center text-lg text-gray-600'>
              <GiziBarChartKabupaten />
            </div>
          </div>
        </div>
      </section>

      <Map />
    </div>
  );
};

export default HomePage;
