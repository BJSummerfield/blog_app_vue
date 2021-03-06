import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import PostsNew from './views/PostsNew';
import Posts from './views/Posts';

import PostsShow from './views/PostsShow';



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: "/signup", 
      name: "signup", 
      component: Signup 
    },
    { path: "/login", 
      name: "login", 
      component: Login 
    }, 
    { path: "/logout", 
      name: "logout", 
      component: Logout 
    },
    { path: "/posts/new", 
      name: "posts-new", 
      component: PostsNew 
    },
    { path: "/posts", 
      name: "posts", 
      component: Posts 
    },
    { path: "/posts/:id", 
      name: "posts-show", 
      component: PostsShow 
    }
  ]
});
