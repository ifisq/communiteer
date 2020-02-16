import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'
import postinfo from '@/components/PostInfo'
import Landing from '@/components/Landing'
import BigMap from '@/components/BigMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/map',
      name: 'map',
      component: BigMap
    },
    {
      path: '/posts/add',
      component: addpost,
      name: 'addpost'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    },
    {
      path: '/posts/:id/info',
      component: postinfo,
      name: 'postinfo'
    }
  ]
})
