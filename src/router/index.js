import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '@/views/Page1View.vue'
import Page2View from '@/views/Page2View.vue'
import Page3View from '@/views/Page3View.vue'

const routes = [
  { path: "/", name: "Page 1", component: Page1View, },
  { path: "/page2", name: "Page 2", component: Page2View, },
  { path: "/page3", name: "Page 3", component: Page3View, },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
