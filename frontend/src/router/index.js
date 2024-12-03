import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import GlobalLoader from "@/widget/GlobalLoader.vue";

// Set up a reactive variable to manage the loader state
const isLoading = ref(false);

// Lazy-load layouts and pages
const AuthLayout = () =>
    import ('../layout/AuthLayout.vue');
const ProtectedLayout = () =>
    import ('@/layout/ProtectedLayout.vue');
const PageNotFound = () =>
    import ('@/views/errorpage/404.vue');
const ComingSoonPage = () =>
    import ('@/views/errorpage/ComingSoonPage.vue');

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: AuthLayout,
            children: [{
                    name: 'login',
                    path: '',
                    component: () =>
                        import ('@/views/auth/Login.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () =>
                        import ('@/views/auth/Register.vue')
                },
                {
                    path: 'Verify-otp',
                    name: 'Verify-otp',
                    component: () =>
                        import ('@/views/auth/ForgetPassword.vue')
                },
                {
                    path: 'forgot-password',
                    name: 'forgot-password',
                    component: () =>
                        import ('@/views/auth/ForgetPassword.vue')
                },
                {

                    path: 'auth-lock-screen',
                    name: 'auth-lock-screen',
                    component: () =>
                        import ('@/views/auth/LockScreen.vue')


                },

                {

                    path: 'auth-logout',
                    name: 'auth-logout',
                    component: () =>
                        import ('@/views/auth/Logout.vue')


                },

            ],
        },
        {
            path: '/dashboard',
            component: ProtectedLayout,
            children: [{

                path: 'profile',
                name: 'profile',
                component: () =>
                    import ('@/views/auth/Profile.vue')


            }]
        },
        {
            path: '/ComingSoon',
            component: ComingSoonPage,
        },
        { path: '/:catchAll(.*)', component: PageNotFound },
    ],
});

// Global navigation guard to show loader before navigating to a route
router.beforeEach((to, from, next) => {
    isLoading.value = true; // Show loader
    setTimeout(() => {
        next(); // Delay route navigation if needed
    }, 1000); // You can change the delay duration as needed
});

// Hide loader after navigation
router.afterEach(() => {
    isLoading.value = false; // Hide loader
});

export { isLoading }; // Export for use in the main app
export default router;