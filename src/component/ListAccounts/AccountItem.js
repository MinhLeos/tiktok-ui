import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '@/component/Image';
import AccountPreview from './AccountPreview';

import { Wrapper as PopperWrapper } from '@/component/Popper';

import styles from './ListAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      );
   };

   return (
      <div>
         <Tippy interactive delay={[700, 0]} offset={[-12, 0]} placement="bottom-start" render={renderPreview}>
            <div className={cx('account-item')}>
               <Image className={cx('account-item-avatar')} src="" alt="icon-avatar" />
               <div className={cx('account-item-info')}>
                  <p className={cx('account-item-nickname')}>
                     <span>nickname</span>
                     <FontAwesomeIcon className={cx('account-item-icon')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('account-item-name')}>User Name</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {};
export default AccountItem;
