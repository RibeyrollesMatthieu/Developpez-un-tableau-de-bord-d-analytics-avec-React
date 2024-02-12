import PropTypes from 'prop-types';
import '@styles/components/sidebar-icon.scss';

export const SideBarIcon = ({ url }) => {
  return <button className={`sidebar-icon`} style={{ backgroundImage: `url('${url}')` }}></button>;
};

SideBarIcon.propTypes = {
  url: PropTypes.string.isRequired,
};
