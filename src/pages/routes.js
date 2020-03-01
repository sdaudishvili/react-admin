import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contacts from './Contacts'
import Projects from './Projects'
import NewProject from './NewProject'

const routes = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home
  },
  {
    id: 2,
    path: '/about',
    title: 'About',
    component: About
  },
  {
    id: 3,
    path: '/menu',
    title: 'Menu',
    component: Menu
  },
  {
    id: 4,
    path: '/contacts',
    title: 'Contacts',
    component: Contacts
  },
  {
    id: 5,
    path: '/projects',
    title: 'Projects',
    component: Projects
  },
  {
    id: 8,
    path: '/projects/UpdateProject/:slug',
    title: '',
    component: NewProject
  },
  {
    id: 9,
    path: '/projects/NewProject',
    title: '',
    component: NewProject
  }
]

export default routes
