import Search from '@/components/Search.vue'
import About from '@/components/About.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' }
]

export default routes
