import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'BB/U Kurang',
    value: 1496, // Jumlah balita BB/U Kurang dari seluruh data
  },
  {
    name: 'TB/U Pendek',
    value: 1537, // Jumlah balita TB/U Pendek dari seluruh data
  },
  {
    name: 'BB/TB Gizi Kurang',
    value: 1382, // Jumlah balita Gizi Kurang
  },
  {
    name: 'BB/TB Gizi Buruk',
    value: 229, // Jumlah balita Gizi Buruk
  },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const GiziPieChart = () => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={150}
          fill='#8884d8'
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GiziPieChart;
