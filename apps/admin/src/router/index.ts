import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import DeliveryView from '../views/delivery-view.vue'
import WorkbenchView from '../views/workbench-view.vue'

/** Primary navigation routes available in the starter admin application. */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/workbench'
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: WorkbenchView
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

