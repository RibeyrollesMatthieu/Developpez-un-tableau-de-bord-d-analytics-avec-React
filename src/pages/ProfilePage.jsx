import { AverageDurationChart } from '@components/charts/AverageDurationChart';
import { DailyChart } from '@components/charts/DailyChart';

import '@styles/pages/profilePage.scss';
import { Card } from '@components/Card';
import { ScoreChart } from '@components/charts/ScoreChart';
import { StatsChart } from '@components/charts/StatsChart';
import { useFetchUserData } from '@/hooks/useFetchUserData';
import { useParams } from 'react-router-dom';

export const ProfilePage = () => {
  const { id } = useParams();
  const { data } = useFetchUserData(id);

  return (
    <div className='profilePage'>
      <h2 className='profilePage__title'>
        Bonjour {data && <span className='text-accent'>{data.userInfos.firstName}</span>}
      </h2>

      <p className='profilePage__debrief'>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>

      <div className='profilePage__container'>
        <section className='profilePage__charts'>
          <div className='profilePage__chart profilePage__chart--grayed' data-grid-area='daily'>
            <DailyChart />
          </div>

          <div className='profilePage__chart profilePage__chart--primary' data-grid-area='duration'>
            <AverageDurationChart />
          </div>

          <div
            className='profilePage__chart profilePage__chart--background-900'
            data-grid-area='stats'>
            <StatsChart />
          </div>

          <div className='profilePage__chart profilePage__chart--grayed' data-grid-area='score'>
            {data && <ScoreChart score={data.score * 100} />}
          </div>
        </section>

        <section className='profilePage__cards'>
          <Card
            iconColor='calories'
            title={`${data ? data.keyData.calorieCount : '0'}kCal`}
            subTitle='Calories'
          />
          <Card
            iconColor='protein'
            title={`${data ? data.keyData.proteinCount : '0'}g`}
            subTitle='Proteines'
          />
          <Card
            iconColor='carbs'
            title={`${data ? data.keyData.carbohydrateCount : '0'}g`}
            subTitle='Glucides'
          />
          <Card
            iconColor='fat'
            title={`${data ? data.keyData.lipidCount : '0'}g`}
            subTitle='Lipides'
          />
        </section>
      </div>
    </div>
  );
};
