import GiziMap from '../components/GiziMap';

const Map = () => {
  return (
    <section className='bg-white pt-24 pb-72'>
      <h2 className='text-3xl font-semibold mb-32 text-center sm:text-2xl md:text-3xl'>
        GIS Kabupaten Sumenep
      </h2>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='relative'>
          <div className='h-64 bg-gray-200 rounded-lg flex items-center justify-center text-lg text-gray-600'>
            <GiziMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
