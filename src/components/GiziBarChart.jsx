import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { selectGiziItem } from '../redux/features/gizi/giziSelector';


const GiziBarChartKabupaten = () => {
  const kabupatenData = useSelector(selectGiziItem);

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
