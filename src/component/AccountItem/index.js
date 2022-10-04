import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"
            alt="icon-avatar"
         />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
