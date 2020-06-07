import Home from './components/home'
import Login from './components/login'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData
  },
  {
    path: '/login',
    component: Login,
    exact: true
  }
]
export default routes
