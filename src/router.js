import { createRouter, createWebHistory } from 'vue-router';

import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: '',
        //     component: ,
        // },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
    ]
    
})

export { router };