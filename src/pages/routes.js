import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contacts from './Contacts'
import Projects from './Projects'
import NewProject from './NewProject'
import Auth from './Auth'
import DefaultLayout from '../layout/DefaultLayout'
import AuthLayout from '../layout/AuthLayout'

const routes = [
  {
    id: 1,
    path: '/',
    component: Home,
    layout: DefaultLayout
  },
  {
    id: 2,
    path: '/about',
    component: About,
    layout: DefaultLayout
  },
  {
    id: 3,
    path: '/menu',
    component: Menu,
    layout: DefaultLayout
  },
  {
    id: 4,
    path: '/contacts',
    component: Contacts,
    layout: DefaultLayout
  },
  {
    id: 5,
    path: '/projects',
    component: Projects,
    layout: DefaultLayout
  },
  {
    id: 6,
    path: '/auth',
    component: Auth,
    layout: AuthLayout
  },
  {
    id: 7,
    path: '/auth/:slug',
    component: Auth,
    layout: AuthLayout
  },
  {
    id: 8,
    path: '/projects/UpdateProject/:slug',
    component: NewProject,
    layout: DefaultLayout
  },
  {
    id: 9,
    path: '/projects/NewProject',
    component: NewProject,
    layout: DefaultLayout
  }
]

export default routes
