import { SideBarIcon } from '@components/layouts/sidebar/SideBarIcon';
import '@styles/components/sidebar.scss';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__menu'>
        <li>
          <SideBarIcon url='/src/assets/sidebar/sitting-man.jpg' />
        </li>
        <li>
          <SideBarIcon url='/src/assets/sidebar/swimming-man.jpg' />
        </li>
        <li>
          <SideBarIcon url='/src/assets/sidebar/biking-man.jpg' />
        </li>
        <li>
          <SideBarIcon url='/src/assets/sidebar/dumbbell.jpg' />
        </li>
      </ul>

      <span className='sidebar__copyright'>Copyright, SportSee 2020</span>
    </div>
  );
};
