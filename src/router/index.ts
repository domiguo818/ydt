import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/app/index.vue')
  },
  {
    path: '/app/dataStatics',
    component: () => import('../views/app/children/dataStatics.vue')
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('../views/data/index.vue')
  },
  {
    path: '/data/quDataStatics',
    component: () => import('../views/data/children/QuDataStatics.vue')
  },
  {
    path: '/data/quDataBiaoDetail',
    name: 'QuDataBiaoDetail',
    component: () => import('../views/data/children/QuDataBiaoDetail.vue')
  },
  {
    path: '/data/TableTraceable',
    name: 'TableTraceable',
    component: () => import('../views/data/children/TableTraceable.vue')
  },
  {
    path: '/data/CollectLibrary',
    name: 'CollectLibrary',
    component: () => import('../views/data/children/CollectLibrary.vue')
  },
  {
    path: '/data/ClassifyGradeInterpret',
    name: 'ClassifyGradeInterpret',
    component: () => import('../views/data/children/ClassifyGradeInterpret.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list/index.vue')
  },
  {
    path: '/list/EventDirectory',
    component: () => import('../views/list/children/EventDirectory.vue')
  },
  {
    path: '/list/InternetThingDevice',
    component: () => import('../views/list/children/InternetThingDevice.vue')
  },
  {
    path: '/list/UnitCatalogue',
    component: () => import('../views/list/children/UnitCatalogue.vue')
  },
  {
    path: '/list/VideoNetworkDirectory',
    component: () => import('../views/list/children/VideoNetworkDirectory.vue')
  },
  {
    path: '/list/ListBasicInform',
    component: () => import('../views/list/children/ListBasicInform.vue')
  },
  {
    path: '/list/ListVideoNetwork',
    component: () => import('../views/list/children/ListVideoNetwork.vue')
  },
  {
    path: '/list/ListEventDirectory',
    component: () => import('../views/list/children/ListEventDirectory.vue')
  },
  {
    path: '/list/ListUnitCatalogue',
    component: () => import('../views/list/children/ListUnitCatalogue.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import('../views/security/index.vue')
  },
  {
    path: '/security/ClassIfClassIf',
    component: () => import('../views/security/children/ClassIfClassIf.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/project/index.vue')
  },
  {
    path: '/project/ItemList',
    name: 'ItemList',
    component: () => import('../views/project/children/ItemList.vue')
  },
  {
    path: '/specialTopicDatabase',
    name: 'specialTopicDatabase',
    component: () => import('../views/specialTopicDatabase/index.vue')
  },
  {
    path: '/ListspecialTopicDatabaseList',
    name: 'ListspecialTopicDatabaseList',
    component: () =>
      import('../views/specialTopicDatabase/ListspecialTopicDatabaseList.vue')
  },
  {
    path: '/getTable',
    name: 'getTable',
    component: () => import('../views/specialTopicDatabase/getTable.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/index.vue')
  },
  {
    path: '/appmenu',
    name: 'appmenu',
    component: () => import('../views/appmeun/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
