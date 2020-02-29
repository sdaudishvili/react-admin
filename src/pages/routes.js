import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contacts from './Contacts'
import Projects from './Projects'
import NewProject from './NewProject'
import Auth from './Auth'
import SignIn from '../components/Login/SignIn'
import AuthLayout from '../layout/AuthLayout'
// eslint-disable-next-line import/no-cycle
import DefaultLayout from '../layout/DefaultLayout'

const routes = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
    layout: DefaultLayout
  },
  {
    id: 2,
    path: '/about',
    title: 'About',
    component: About,
    layout: DefaultLayout
  },
  {
    id: 3,
    path: '/menu',
    title: 'Menu',
    component: Menu,
    layout: DefaultLayout
  },
  {
    id: 4,
    path: '/contacts',
    title: 'Contacts',
    component: Contacts,
    layout: DefaultLayout
  },
  {
    id: 5,
    path: '/projects',
    title: 'Projects',
    component: Projects,
    layout: DefaultLayout
  },
  {
    id: 6,
    path: '/auth',
    title: '',
    component: Auth,
    layout: AuthLayout
  },
  {
    id: 7,
    path: '/auth/:slug',
    title: '',
    component: Auth,
    layout: AuthLayout
  },
  {
    id: 8,
    path: '/projects/UpdateProject/:slug',
    title: '',
    component: NewProject,
    layout: DefaultLayout
  },
  {
    id: 9,
    path: '/projects/NewProject',
    title: '',
    component: NewProject,
    layout: DefaultLayout
  },
  {
    id: 10,
    path: '/signinnew',
    title: '',
    component: SignIn,
    layout: AuthLayout
  }
]

export default routes
