import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const kabupatenData = [
  {
    kecamatan: 'Pragaan',
    bb_u_kurang: 211,
    tb_u_pendek: 64,
    bb_tb_gizi_kurang: 246,
    bb_tb_gizi_buruk: 55,
  },
  {
    kecamatan: 'Bluto',
    bb_u_kurang: 93,
    tb_u_pendek: 67,
    bb_tb_gizi_kurang: 106,
    bb_tb_gizi_buruk: 10,
  },
  {
    kecamatan: 'Saronggi',
    bb_u_kurang: 60,
    tb_u_pendek: 67,
    bb_tb_gizi_kurang: 28,
    bb_tb_gizi_buruk: 1,
  },
  {
    kecamatan: 'Giligenting',
    bb_u_kurang: 21,
    tb_u_pendek: 123,
    bb_tb_gizi_kurang: 3,
    bb_tb_gizi_buruk: 3,
  },
  // Tambahkan lebih banyak kecamatan...
];

const GiziBarChartKabupaten = () => {
  const [selectedKecamatan, setSelectedKecamatan] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (selectedKecamatan.includes(value)) {
      setSelectedKecamatan(selectedKecamatan.filter((item) => item !== value));
    } else {
      setSelectedKecamatan([...selectedKecamatan, value]);
    }
  };

  const filteredData = kabupatenData.filter((item) =>
    selectedKecamatan.length > 0
      ? selectedKecamatan.includes(item.kecamatan)
      : true
  );

  return (
    <div className='chart-container'>
      <h3>Pilih Kecamatan untuk Ditampilkan:</h3>
      <div className='checkbox-container'>
        {kabupatenData.map((item) => (
          <label key={item.kecamatan} className='checkbox-label'>
            <input
              type='checkbox'
              value={item.kecamatan}
              onChange={handleCheckboxChange}
              checked={selectedKecamatan.includes(item.kecamatan)}
              className='checkbox-input'
            />
            <span className='checkbox-custom'></span> {item.kecamatan}
          </label>
        ))}
      </div>

      <div style={{ overflowX: 'auto', marginTop: '20px' }}>
        <ResponsiveContainer width='150%' height={400}>
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='kecamatan'
              angle={-45}
              textAnchor='end'
              height={120}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='bb_u_kurang' fill='#8884d8' name='BB/U Kurang' />
            <Bar dataKey='tb_u_pendek' fill='#82ca9d' name='TB/U Pendek' />
            <Bar
              dataKey='bb_tb_gizi_kurang'
              fill='#ffc658'
              name='BB/TB Gizi Kurang'
            />
            <Bar
              dataKey='bb_tb_gizi_buruk'
              fill='#ff8042'
              name='BB/TB Gizi Buruk'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GiziBarChartKabupaten;
