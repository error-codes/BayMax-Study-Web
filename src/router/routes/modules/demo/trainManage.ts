import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const trainManage: AppRouteModule = {
  path: '/trainManage',
  name: 'TrainManage',
  component: LAYOUT,
  redirect: '/trainManage/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:tv',
    title: t('routes.demo.train.train'),
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

export default trainManage;
