// eslint-disable-next-line react/prop-types
const GiziCard = ({ title, value, description, color }) => {
  return (
    <div className={`bg-black text-white rounded-lg shadow-lg p-6`}>
      <h3 className='text-2xl font-bold mb-2'>{title}</h3>
      <p className='text-4xl font-extrabold'>{value}</p>
      <p className='mt-2 text-sm'>{description}</p>
    </div>
  );
};

export default GiziCard;
