import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/add',
    name:"AddPost",
    component:AddPost
  },
  {
    path:'/edit/:id',
    name:'EditPost',
    component:EditPost,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
