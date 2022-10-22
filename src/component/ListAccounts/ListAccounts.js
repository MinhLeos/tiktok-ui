import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';

import styles from './ListAccounts.module.scss';

const cx = classNames.bind(styles);

function ListAccounts({ label }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <AccountItem />
         <AccountItem />

         <p className={cx('see-more-less')}>See all</p>
         <p className={cx('see-more-less')}>See less</p>
      </div>
   );
}

ListAccounts.propTypes = {
   label: PropTypes.string.isRequired,
};
export default ListAccounts;
