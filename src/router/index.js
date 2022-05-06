import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Job from "@/views/Job.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/job/:id",
    name: "job",
    component: Job,
    meta: {
      title: "Job",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  document.title = to.params.title ? to.params.title : to.meta.title;
  next();
});

export default router;
