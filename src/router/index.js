import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QRGenerator from "../views/QRGenerator.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/app', component: QRGenerator }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router