import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/AdminPageHeader';
import GiziBarChart from '../../components/GiziBarChart'; // Path to the BarChart component
import GiziCard from '../../components/GiziCard';
import GiziMap from '../../components/GiziMap';
import GiziPieChart from '../../components/GiziPieChart'; // Path to the PieChart component
import {
  selectGiziItem,
  selectGiziStatus,
} from '../../redux/features/gizi/giziSelector';
import { useEffect} from 'react';
import { getData } from '../../redux/features/gizi/giziAPI';

const Dashboard = () => {
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

  const dataGizi = [
    {
      title: 'BB Kurang',
      value: a, // jumlah balita dengan gizi baik
      description: 'Jumlah balita dengan gizi baik di Kabupaten Sumenep',
    },
    {
      title: 'TB Pendek',
      value: b, // jumlah balita dengan gizi kurang
      description: 'Jumlah balita dengan gizi kurang di Kabupaten Sumenep',
    },
    {
      title: 'Gizi Buruk',
      value: c, // jumlah balita dengan gizi buruk
      description: 'Jumlah balita dengan gizi buruk di Kabupaten Sumenep',
    },
    {
      title: 'Gizi Kurang',
      value: d, // jumlah balita dengan gizi buruk
      description: 'Jumlah balita dengan gizi buruk di Kabupaten Sumenep',
    },
  ];

  if (status == 'loading') {
    return <p className='text-center font-bold text-3xl'>Loading...</p>;
  } else if (status == 'failed') {
    return <p className='text-center font-bold text-3xl'>Eror</p>;
  }

  return (
    <div className='flex flex-col gap-y-20 max-w-7xl mx-auto px-6'>
      <Header.DashboardHeader />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {dataGizi.map((item, index) => (
          <GiziCard
            key={index}
            title={item.title}
            value={item.value}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>

      <section className='p-6'>
        <h3 className='text-xl mb-5 font-bold text-center'>
          Data Gizi Balita Berdasarkan Lokasi
        </h3>
        <GiziMap />
      </section>

      <section className='p-6'>
        <h3 className='text-xl mb-5 font-bold text-center'>
          Jumlah Status Gizi Balita
        </h3>
        <GiziBarChart />
      </section>

      {/* Pie Chart */}
      <section className='p-6'>
        <h3 className='text-xl mb-5 font-bold text-center'>
          Persentase Gizi Kurang dan Buruk
        </h3>
        <GiziPieChart />
      </section>
    </div>
  );
};

export default Dashboard;
