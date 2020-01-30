import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Menu from '../../pages/Menu'
import Contacts from '../../pages/Contacts'
import Projects from '../../pages/Projects'

function NavSwitcher() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="*">not found</Route>
    </Switch>
  )
}

export default NavSwitcher
