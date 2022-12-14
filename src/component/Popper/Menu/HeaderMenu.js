import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
   return (
      <header className={cx('header-menu')}>
         <button className={cx('back-btn')} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <h4 className={cx('menu-title')}>{title}</h4>
      </header>
   );
}

HeaderMenu.propTypes = {
   title: PropTypes.string,
   onBack: PropTypes.func,
};

export default HeaderMenu;
