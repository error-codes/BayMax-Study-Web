import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const workHourManage: AppRouteModule = {
  path: '/workHourManage',
  name: 'WorkHourManage',
  component: LAYOUT,
  redirect: '/workHourManage/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:timer',
    title: t('routes.demo.workHour.workHour'),
  },
  children: [
    {
      path: 'index',
      name: 'SetupDemoPage',
      component: () => import('/@/views/demo/setup/index.vue'),
      meta: {
        title: t('routes.demo.setup.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default workHourManage;
