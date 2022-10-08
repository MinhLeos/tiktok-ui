import React, { Children, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PopperWrapper } from '@/component/Popper';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ children, items = [], onChange = defaultFunc }) {
   const [menu, setMenu] = useState([{ data: items }]);
   const currentMenu = menu[menu.length - 1];

   const renderItem = () => {
      return currentMenu.data.map((item, idx) => {
         const isParent = !!item.subMenu;
         return (
            <MenuItem
               data={item}
               key={idx}
               onClick={() => {
                  if (isParent) {
                     setMenu((prev) => [...prev, item.subMenu]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   return (
      <Tippy
         // visible
         delay={[0, 600]}
         placement="bottom-end"
         interactive={true}
         render={(attrs) => (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx('menu-item-wrapper')}>
                  {menu.length > 1 && (
                     <HeaderMenu
                        title={currentMenu.title}
                        onBack={() => {
                           setMenu((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItem()}
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;