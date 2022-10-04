import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '@/assets/images';
import AccountItem from '@/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '@/component/Popper';

const cx = classNames.bind(styles);

function Header() {
   const [searchResults, setSearchResults] = useState([]);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <Tippy
               visible={searchResults.length > 0}
               interactive={true}
               render={(attrs) => (
                  <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search accounts and videos" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('actions')}></div>
         </div>
      </header>
   );
}

export default Header;
