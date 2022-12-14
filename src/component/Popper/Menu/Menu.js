import React, { Children, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '@/component/Popper';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ children, items = [], onChange = defaultFunc, hideOnClick = false }) {
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

   const renderResult = (attrs) => (
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
            <div className={cx('menu-body')}>{renderItem()}</div>
         </PopperWrapper>
      </div>
   );

   const handleResetMenuToFirstPage = () => {
      setMenu((prev) => prev.slice(0, 1));
   };

   return (
      <Tippy
         // visible
         hideOnClick={hideOnClick}
         delay={[0, 600]}
         offset={[12, 12]}
         placement="bottom-end"
         interactive={true}
         render={renderResult}
         onHide={handleResetMenuToFirstPage}
      >
         {children}
      </Tippy>
   );
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   onChange: PropTypes.func,
   hideOnClick: PropTypes.bool,
};

export default Menu;
