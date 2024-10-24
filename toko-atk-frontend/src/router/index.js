import { createRouter, createWebHistory } from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BarangForm from '../components/BarangForm.vue';
import BarangList from '../components/BarangList.vue';
import DashboardPages from '../components/DashboardPages.vue';
import SettingsPages from '../components/SettingsPages.vue';
import AppNavbar from '../components/AppNavbar.vue';
import PembelianPages from '../views/PembelianPages.vue';
import PenjualanPages from '../views/PenjualanPages.vue';
import LaporanPages from '../views/LaporanPages.vue';
import LoginScreen from '../views/LoginScreen.vue';
import jwt from 'jsonwebtoken'; // Import library JWT untuk dekode token
import UserManagement from '../views/UserManagement.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/barang-form',
        name: 'BarangForm',
        component: BarangForm
    },
    {
        path: '/barang-list',
        name: 'BarangList',
        component: BarangList
    },
    {
        path: '/dashboard-pages',
        name: 'DashboardPages',
        component: DashboardPages
    },
    {
        path: '/settings-pages',
        name: 'SettingsPages',
        component: SettingsPages
    },
    {
        path: '/App-navbar',
        name: 'AppNavbar',
        component: AppNavbar
    },
    {
        path: '/pembelian-pages',
        name: 'PembelianPages',
        component: PembelianPages
    },
    {
        path: '/penjualan-pages',
        name: 'PenjualanPages',
        component: PenjualanPages
    },
    {
        path: '/laporan-pages',
        name: 'LaporanPages',
        component: LaporanPages
    },

    {
        path: '/user-management',
        name: 'UserManagement',
        component: UserManagement,
        meta: { requiresAuth: true, requiresRole: 'admin' } // Tambahkan meta data untuk perizinan
    },



    {
        path: '/login-screen',
        name: 'LoginScreen',
        component: LoginScreen
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('token')) {
            next('/login'); 
        } else {
            const token = localStorage.getItem('token');
            const decoded = jwt.decode(token); // Dekode token JWT

            if (to.matched.some(record => record.meta.requiresRole)) {
                if (decoded.role !== to.meta.requiresRole) {
                    next({
                        name: 'Home', // Atau halaman error 
                        params: {
                            message: 'Anda tidak memiliki izin untuk mengakses halaman ini'
                        }
                    });
                } else {
                    next();
                }
            } else {
                next();
            }
        }
    } else {
        next();
    }
});




export default router;