import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const userManage: AppRouteModule = {
  path: '/userManage',
  name: 'UserManage',
  component: LAYOUT,
  redirect: '/userManage/innerUserManage',
  meta: {
    orderNo: 90000,
    icon: 'whh:useralt',
    title: t('routes.demo.user.user'),
  },
  children: [
    {
      path: 'innerUserManage',
      name: 'InnerUserManage',
      meta: {
        title: t('routes.demo.user.innerUserManage'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/userManage/innerUserManage/index.vue'),
    },
    {
      path: 'serviceUserManage',
      name: 'ServiceUserManage',
      meta: {
        title: t('routes.demo.user.serviceUserManage'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/userManage/serviceUserManage/index.vue'),
    },
    {
      path: 'realNameCheck',
      name: 'RealNameCheck',
      meta: {
        title: t('routes.demo.user.realNameCheck'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/userManage/realNameCheck/index.vue'),
    },
  ],
};

export default userManage;
