// Layouts
import { HeaderOnly } from '@/layouts';

import config from '@/config';
//Page
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import Live from '@/pages/Live';

// Public routes
const publicRoutes = [
   { path: config.routesConfig.home, component: Home },
   { path: config.routesConfig.following, component: Following },
   { path: config.routesConfig.profile, component: Profile },
   { path: config.routesConfig.live, component: Live },
   // { path: '/profile', component: Profile },
   { path: config.routesConfig.upload, component: Upload, layout: HeaderOnly },
   { path: config.routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
