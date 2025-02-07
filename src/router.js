import OurOffers from '@/components/ourOffers.vue';
import { createRouter, createWebHistory } from 'vue-router';
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
  history: createWebHistory(),
  routes
});

export default router;