import { useSelector } from 'react-redux';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { selectGiziItem } from '../redux/features/gizi/giziSelector';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const GiziPieChart = () => {
  const item = useSelector(selectGiziItem);

  const totals = {
    'BB/U Kurang': item.reduce((acc, item) => acc + item.bb_u_kurang, 0),
    'TB/U Pendek': item.reduce((acc, item) => acc + item.tb_u_pendek, 0),
    'BB/TB Gizi Kurang': item.reduce(
      (acc, item) => acc + item.bb_tb_gizi_kurang,
      0
    ),
    'BB/TB Gizi Buruk': item.reduce(
      (acc, item) => acc + item.bb_tb_gizi_buruk,
      0
    ),
  };

  const data = Object.keys(totals).map((key) => ({
    name: key,
    value: totals[key],
  }));

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
          label={(entry) =>
            `${entry.name}: ${entry.value.toLocaleString('id-ID')}`
          } // Format label here
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => value.toLocaleString('id-ID')} />{' '}
        {/* Format tooltip */}
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GiziPieChart;
