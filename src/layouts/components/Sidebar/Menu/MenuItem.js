import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
   return (
      <NavLink to={to} className={(navLink) => cx('menu-item', { active: navLink.isActive })} end>
         <span className={cx('menu-icon')}>{icon}</span>
         <span className={cx('menu-active-icon')}>{activeIcon}</span>
         <span className={cx('menu-item-title')}>{title}</span>
      </NavLink>
   );
}

MenuItem.propTypes = {
   title: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
