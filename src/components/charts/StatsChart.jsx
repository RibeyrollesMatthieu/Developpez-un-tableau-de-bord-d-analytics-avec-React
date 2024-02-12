import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '@styles/components/charts/stats-chart.scss';
import { useFetchPerformance } from '@/hooks/useFetchPerformance';
import { useParams } from 'react-router-dom';

export const StatsChart = () => {
  const { id } = useParams();
  const { data } = useFetchPerformance(id);

  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
      <g>
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className='stats-chart__tick'
          textAnchor={textAnchor}>
          <tspan x={x} dy='0em'>
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <ResponsiveContainer width='100%' height='100%' aspect={1} className='stats-chart__container'>
      <RadarChart
        cx='50%'
        cy='50%'
        outerRadius='80%'
        data={data}
        margin={{
          top: 40,
          right: 40,
          left: 40,
          bottom: 40,
        }}>
        <PolarGrid />
        <PolarAngleAxis dataKey='kind' tick={customTick} />
        <Radar dataKey='value' stroke='var(--primary)' fill='var(--primary)' fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
