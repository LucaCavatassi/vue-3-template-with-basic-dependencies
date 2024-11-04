import { createRouter, createWebHistory } from "vue-router";
import HomePage from './src/pages/HomePage.vue';


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                title: 'Home'
            }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition; // Return to saved scroll position (for browser back/forward navigation)
        } else {
            return { top: 0 }; // Scroll to the top of the page for each new navigation
        }
    }
})

router.beforeEach((to, from, next) => {
    const projectName = 'Vue-Project'; // Replace with your project name
    const pageTitle = to.meta.title ? `${projectName} - ${to.meta.title}` : projectName;
    document.title = pageTitle;
    next();
});