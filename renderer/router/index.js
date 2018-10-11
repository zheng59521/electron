import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 返回文件路径的函数
const filePath =  name => require(`@/components/${name}`).default;
const loginPage = filePath('login/loginPage');
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/',
      name: 'landing-page',
      component:  filePath('LandingPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
router.beforeEach( (to, from , next) => {
  const token = localStorage.getItem('token');
  if ( to.path == '/login' )　next()
  next( !token ? '/login' : true)
} ) 
export default router;