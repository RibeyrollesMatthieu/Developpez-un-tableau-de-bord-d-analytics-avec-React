import PropTypes from 'prop-types';
import '@styles/components/card.scss';

export const Card = ({ title, subTitle, iconColor }) => {
  return (
    <div className='card'>
      <div className={`card__icon card__icon--${iconColor}`}></div>

      <div>
        <p className='card__title'>{title}</p>
        <p className='card__sub-title'>{subTitle}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(['calories', 'protein', 'carbs', 'fat']).isRequired,
};
