import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/courses/:cid",
    //   props: true,
    //   component: () => import("./views/Course"),
    //   children: [
    //     {
    //       path: "homeworks",
    //       props: true,
    //       component: () => import("./views/Homework")
    //     }
    //   ]
    // },
    {
      path: "/exams",
      props: true,
      component: () => import("./views/Exams")
    },
    {
      path: "/exams/:eid",
      props: true,
      component: () => import("./views/admin/AllocateButton")
    },
    {
      path: "/users",
      props: true,
      component: () => import("./views/Users")
    },
    {
      path: "/users/:uid",
      props: true,
      component: () => import("./views/admin/UpdateUserButton")
    },
    {
      path: "/tasks",
      props: true,
      component: () => import("./views/Tasks")
    },
    {
      path: "/tasks/:tid",
      props: true,
      component: () => import("./views/admin/UpdateTaskButton")
    },
    {
      path: "/my/exams",
      props: true,
      component: () => import("./views/MyExams")
    },
    {
      path: "/my/tasks",
      props: true,
      component: () => import("./views/MyTasks")
    },
    {
      path: "/alloc/tasks/:tid",
      props: true,
      component: () => import("./views/admin/AllocateTaskButton")
    },
    {
      path: "/users/:uid/tasks/:tid",
      props: true,
      component: () => import("./views/ResponseTaskButton")
    },
    {
      path: "/taskDetails/:tid",
      props: true,
      component: () => import("./views/UserResponses")
    },
    {
      path: "/my/users",
      props: true,
      component: () => import("./views/UpdateUser.vue")
    }
  ]
});
