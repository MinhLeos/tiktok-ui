import React from 'react';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   HomeActiveIcon,
   UserGroupIcon,
   UserGroupActiveIcon,
   LiveIcon,
   LiveActiveIcon,
} from '@/component/Icons';
import config from '@/config';

import styles from './Sidebar.module.scss';
import ListAccounts from '@/component/ListAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               to={config.routesConfig.home}
               title="For You"
               icon={<HomeIcon />}
               activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
               to={config.routesConfig.following}
               title="Following"
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem to={config.routesConfig.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>
         <ListAccounts label="Suggested Accounts" />
         <ListAccounts label="Following Accounts" />
      </aside>
   );
}

export default Sidebar;
