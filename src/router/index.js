import Vue from 'vue'
import Router from 'vue-router'
import buildsection from '@/components/bussiness/BuildSection'
import navigation from '@/components/bussiness/Navigation'
import tablecontent from '@/components/bussiness/TableContent'

Vue.use(Router)
Vue.component('buildsection', buildsection)
Vue.component('navigation', navigation)
Vue.component('tablecontent', tablecontent)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
