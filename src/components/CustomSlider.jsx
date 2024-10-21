import { useState } from 'react';

function CustomSlider() {
  const [value, setValue] = useState(50); // Nilai awal slider (dari 0 hingga 100)

  const handleLeftClick = () => {
    setValue((prev) => (prev > 0 ? prev - 10 : 0)); // Geser ke kiri, kurangi nilai
  };

  const handleRightClick = () => {
    setValue((prev) => (prev < 100 ? prev + 10 : 100)); // Geser ke kanan, tambahkan nilai
  };

  return (
    <div className='flex items-center space-x-4'>
      <button
        onClick={handleLeftClick}
        className='px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        L
      </button>
      <div className='w-64 h-4 bg-gray-200 rounded-full relative'>
        <div
          className='h-4 bg-blue-500 rounded-full'
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <button
        onClick={handleRightClick}
        className='px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        R
      </button>
    </div>
  );
}

export default CustomSlider;
