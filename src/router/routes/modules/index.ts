import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const index: AppRouteModule = {
  path: '/index',
  name: 'Index',
  component: LAYOUT,
  redirect: '/index/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.index.index'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/index/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.index.analysis'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/index/workbench/index.vue'),
      meta: {
        title: t('routes.index.workbench'),
      },
    },
  ],
};

export default index;
