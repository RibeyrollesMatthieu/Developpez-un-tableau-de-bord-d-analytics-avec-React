import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '@styles/components/charts/daily-chart.scss';
import { useFetchDailyData } from '@/hooks/useFetchDailyData';
import { useParams } from 'react-router-dom';

export const DailyChart = () => {
  const { id } = useParams();
  const { data } = useFetchDailyData(id);

  const tooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      const [kg, kcals] = payload;

      return (
        <div className='daily-chart__tooltip'>
          <p>{`${kg.value}kg`}</p>
          <p>{`${kcals.value}kCal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={data}
        barSize={10}
        barGap={10}
        margin={{
          top: 50,
          right: 50,
          left: 50,
          bottom: 20,
        }}>
        <text x='50px' y='15%' fill='var(--foreground)' fontWeight={600}>
          Activité quotidienne
        </text>
        <Legend
          verticalAlign='top'
          align='right'
          iconType='circle'
          iconSize={7}
          wrapperStyle={{
            marginTop: -23,
            marginRight: -22,
          }}
        />

        <CartesianGrid strokeDasharray='3 3' vertical={false} />

        <XAxis tickSize={false} dy={20} padding={{ left: -27, right: -27 }} />
        <YAxis orientation='right' tickCount={3} axisLine={false} tickLine={false} dx={35} />

        <Tooltip content={tooltip} cursor={{ opacity: 0.5 }} />

        <Bar
          name='Poids (kg)'
          radius={[10, 10, 0, 0]}
          dataKey='kilogram'
          fill='var(--foreground)'
        />
        <Bar
          name='Calories brûlées (kCal)'
          radius={[10, 10, 0, 0]}
          dataKey='calories'
          fill='var(--primary)'
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
