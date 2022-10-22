import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '@/component/Image';
import Button from '@/component/Button';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('account-preview-header')}>
            <Image className={cx('account-preview-header-avatar')} src="" alt="icon-avatar" />
            <Button className={cx('account-preview-header-btn')} primary>
               Follow
            </Button>
         </header>
         <div className={cx('account-preview-body')}>
            <p className={cx('account-preview-body-nickname')}>
               <span>nickname</span>
               <FontAwesomeIcon className={cx('account-preview-body-icon')} icon={faCheckCircle} />
            </p>
            <p className={cx('account-preview-body-name')}>User Name</p>
            <p>
               <strong className={cx('account-preview-body-quantity')}>67M</strong>
               <span className={cx('account-preview-body-label')}>Followers</span>
               <strong className={cx('account-preview-body-quantity')}>50M</strong>
               <span className={cx('account-preview-body-label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
