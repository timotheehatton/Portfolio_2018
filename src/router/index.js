import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Trilatte3d from '@/components/cases/Trilatte3d';
import Doctobot from '@/components/cases/Doctobot';
import Wisestone from '@/components/cases/Wise-stone';
import Bmw from '@/components/cases/Bmw-i8';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/trilatte3d',
      name: 'trilatte3d',
      component: Trilatte3d,
    },
    {
      path: '/doctobot',
      name: 'Doctobot',
      component: Doctobot,
    },
    {
      path: '/wise-stone',
      name: 'Wise Stone',
      component: Wisestone,
    },
    {
      path: '/bmw-i8',
      name: 'BMW i8',
      component: Bmw,
    },
  ],
});
