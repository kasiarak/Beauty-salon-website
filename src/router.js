import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './MainPage.vue';
import OurServices from './OurServices.vue';
import PriceList from './PriceList.vue';
import ContactPage from './ContactPage.vue';
import BookNow from './BookNow.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/OurServices', component: OurServices },
    { path: '/PriceList', component: PriceList },
    { path: '/ContactPage', component: ContactPage },
    { path: '/BookNow', component: BookNow }
  ]
});

export default router;