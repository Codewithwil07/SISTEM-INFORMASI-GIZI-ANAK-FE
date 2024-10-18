import Header from '../../components/AdminPageHeader';
import GiziBarChart from '../../components/GiziBarChart'; // Path to the BarChart component
import GiziCard from '../../components/GiziCard';
import GiziMap from '../../components/GiziMap';
import GiziPieChart from '../../components/GiziPieChart'; // Path to the PieChart component

const Dashboard = () => {
  const dataGizi = [
    {
      title: 'BB Kurang',
      value: 120, // jumlah balita dengan gizi baik
      description: 'Jumlah balita dengan gizi baik di Kabupaten Sumenep',
      color: 'gray',
    },
    {
      title: 'TB Kurang',
      value: 50, // jumlah balita dengan gizi kurang
      description: 'Jumlah balita dengan gizi kurang di Kabupaten Sumenep',
      color: 'slate',
    },
    {
      title: 'Gizi Buruk',
      value: 15, // jumlah balita dengan gizi buruk
      description: 'Jumlah balita dengan gizi buruk di Kabupaten Sumenep',
      color: '',
    },
    {
      title: 'Gizi Kurang',
      value: 15, // jumlah balita dengan gizi buruk
      description: 'Jumlah balita dengan gizi buruk di Kabupaten Sumenep',
      color: '',
    },
  ];

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
