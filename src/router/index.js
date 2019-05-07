import Vue from 'vue';
import Router from 'vue-router';
import Webapp from '@/pages/webapp';
import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/webapp/:webappid',
            name: 'webapp',
            component: Webapp
        }
    ]
});
