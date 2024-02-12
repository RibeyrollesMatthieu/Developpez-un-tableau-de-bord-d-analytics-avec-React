import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import '@styles/components/charts/average-duration-chart.scss';
import { useFetchAverageSessions } from '@/hooks/useFetchAverageSessions';
import { useParams } from 'react-router-dom';

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export const AverageDurationChart = () => {
  const { id } = useParams();
  const { data } = useFetchAverageSessions(id);

  const tooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      const [sessionLength] = payload;

      return (
        <div className='average-duration-chart__tooltip'>
          <p>{`${sessionLength.value} min`}</p>
        </div>
      );
    }

    return null;
  };

  const xAxis = ({ x, y, payload }) => {
    const { index } = payload;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={20} textAnchor='middle' fill='var(--background-100)' opacity={0.504}>
          {days[index]}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='75%' className='average-duration-chart__container'>
      <LineChart className='average-duration-chart' data={data} width='104%'>
        <text
          className='average-duration-chart__title'
          y='-25%'
          fill='var(--background-100)'
          opacity={0.504}
          fontWeight={600}>
          <tspan x='5%' dy='1.2em'>
            Durée moyenne des
          </tspan>
          <tspan x='5%' dy='1.2em'>
            sessions
          </tspan>
        </text>

        <Tooltip content={tooltip} cursor={{ display: 'none' }} />

        <Line
          dot={false}
          type='monotone'
          dataKey='sessionLength'
          stroke='var(--background-100)'
          strokeWidth={2}
          activeDot={{
            stroke: 'var(--background-100)',
            r: 4,
            strokeWidth: '8',
            fill: 'var(--background-100)',
            strokeOpacity: 0.5,
          }}
        />

        <XAxis
          interval='preserveStartEnd'
          axisLine={false}
          tickLine={false}
          tick={xAxis}
          dataKey='sessionLength'
          color='var(--background-100)'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
