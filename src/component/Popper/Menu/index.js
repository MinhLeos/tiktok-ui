import React, { Children } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '@/component/Popper';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItem = () => {
      return items.map((item, idx) => {
         return <MenuItem data={item} key={idx} />;
      });
   };

   return (
      <Tippy
         delay={[0, 600]}
         placement="bottom-end"
         interactive={true}
         render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-item-wrapper')}>{renderItem()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
