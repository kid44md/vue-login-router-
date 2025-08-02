import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserView from '@/views/UserView.vue'
import RootView from '@/views/RootView.vue'
import DashBoardView from '@/views/DashBoardView.vue'
import LogOutView from '@/views/LogOutView.vue'
/* if anyone was to see this, /home/ && /username/:username are nested routes.
all visitors will be directed to the homeview -> /home/.
these visitors will be able to see the Home Screen initial.
if you click on the links for the login or signup, it will take you to different pages.
if you login or signup it will take you to the /username/:username/, which would be the 
dashboard view. 
inside the /username/:username, you will see new set of links which are the dashboard and logout. 
the previous are gone because you are in a different nested route. 
treat the parent route as the frame, the nested children as the content. 
once you logout it will take you to the /home/ path. 
*/
/* 
i setup navigation guards to prevent visitor from to the /username/:username if they didn't 
login or signup, it will redirect them to the login. 
this is based on if they have a token or not. 
*/


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/home/',/* /home/ -> parent */
      component: RootView,
      children: [{
          path: '',
          component: HomeView
        },
        {
          path: 'signup',
          component: SignUpView,
          name: 'signup'
        },
        {
          path: 'login',
          component: LogInView,
          name: 'login'
        }
      ]
    },
    {

      path: '/username/:username',/* /username/:username -> parent */
      component: UserView,
      name: 'profile',
      children: [{
          path: '',
          name: 'Dashboard',
          component: DashBoardView, 
          props:true
        },
        {
          path: 'logout',
          name: 'logout',
          redirect: (to,from) =>{
            localStorage.removeItem(to.params.username);
            return {path:'/home/'}
          }
        }
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(to.params.username);
  const auth = checkingLocalStorage(to.params.username);
  if (to.name === 'Dashboard' && !auth) next({
    name: 'login'
  });
  else next();
});




function checkingLocalStorage(paramName) {
  const data = JSON.parse(localStorage.getItem(paramName));
  if (data === null) {
    return false
  } else {
    return true;
  }
}
export default router