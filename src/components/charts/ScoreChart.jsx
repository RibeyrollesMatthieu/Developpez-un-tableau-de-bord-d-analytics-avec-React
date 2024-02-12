import { useState } from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import '@styles/components/charts/score-chart.scss';

export const ScoreChart = ({ score }) => {
  const [data] = useState([
    {
      value: score,
    },
  ]);

  return (
    <ResponsiveContainer width='100%' height='100%' aspect={1}>
      <RadialBarChart
        className='score-chart'
        startAngle={180}
        endAngle={-180}
        data={data}
        innerRadius={100}
        barSize={10}>
        <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar background dataKey='value' cornerRadius={100} fill='var(--primary)' />
        <text x='10%' y='10%' className='score-chart__title'>
          Score
        </text>
        <text
          x='50%'
          y='45%'
          textAnchor='middle'
          dominantBaseline='middle'
          className='score-chart__score'>
          {data[0].value}%
        </text>
        <text
          x='50%'
          y='55%'
          textAnchor='middle'
          dominantBaseline='middle'
          className='score-chart__label'>
          de votre objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};
