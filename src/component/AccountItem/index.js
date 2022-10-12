import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   console.log('user: ', data);
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt="icon-avatar" />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>
                  {data.first_name} {data.last_name}
               </span>
               {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
         </div>
      </Link>
   );
}

export default AccountItem;
