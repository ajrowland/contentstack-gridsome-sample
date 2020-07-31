const c1 = () => import(/* webpackChunkName: "page--src--templates--general-vue" */ "/home/chrx/Documents/site/src/templates/General.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/chrx/Documents/site/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/chrx/Documents/site/src/pages/Index.vue")

export default [
  {
    path: "/about-unilever/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
