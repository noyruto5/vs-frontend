import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LoginPage from '@/components/LoginPage'
import UpdatePage from '@/components/UpdatePage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Homepage', component: HomePage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/update', name: 'Updatepage', component: UpdatePage }
  ]
})
