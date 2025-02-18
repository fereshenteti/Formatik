import OurOffers from '@/components/ourOffers.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './components/home/homePage.vue';

export const ROUTE_CONSTS = {
    HOME: '/',
    OFFERS: '/our-offers'
}

const routes = [
  { path: ROUTE_CONSTS.HOME, component: HomePage },
  { path: ROUTE_CONSTS.OFFERS, component: OurOffers }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // For back/forward navigation
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: "100"
      }
    }
    return { top: 0, behavior: 'smooth' }; // Scroll to top for new navigations
  },
});

export default router;