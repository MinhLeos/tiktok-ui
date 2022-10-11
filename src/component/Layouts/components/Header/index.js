import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import Button from '@/component/Button';
import Image from '@/component/Image';
import images from '@/assets/images';
import Menu from '@/component/Popper/Menu';
import AccountItem from '@/component/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleQuestion,
   faCircleXmark,
   faCloudUpload,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faMessage,
   faSignIn,
   faSignOut,
   faSpinner,
   faUpload,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '@/component/Popper';
import { InboxIcon, MessageIcon, UploadIcon } from '@/component/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      subMenu: {
         title: 'Language',
         data: [
            {
               code: 'vi',
               type: 'language',
               title: 'Tiếng Việt',
            },
            {
               code: 'en',
               type: 'language',
               title: 'English',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];

function Header() {
   const [searchResults, setSearchResults] = useState([]);

   const currentUser = true;

   const handleOnchangeMenu = (selectMenu) => {
      console.log('selectMenu', selectMenu);
      switch (selectMenu.type) {
         case 'language':
            console.log('work');
            //Handle change language
            break;
         default:
      }
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/profile',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/get-coins',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/log-out',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Mesage" placement="bottom">
                        <button className={cx('action-btn')}>
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                           {/* <FontAwesomeIcon icon={faMessage} /> */}
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     {/* <Button text className={cx('custom-button')}>
                  Upload
               </Button> */}
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchangeMenu}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        alt="user"
                        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                        fallback="link anh muon thay the"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
