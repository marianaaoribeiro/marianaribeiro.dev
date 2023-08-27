import Vue from "vue";
import VueRouter from "vue-router";
const header = () => import('@/components/HeaderBar.vue')
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header,
      default: () => import('@/views/HomeView.vue'),
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
