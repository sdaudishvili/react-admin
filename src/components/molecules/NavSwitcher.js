import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../../pages/routes'

const generateRoute = (route) => (
  <Route key={route.id} exact path={route.path}>
    <route.layout>
      <route.component />
    </route.layout>
  </Route>
)

const NavSwitcher = () => (
  <Switch>
    {routes.map(generateRoute)}
    <Route path="*">notfound</Route>
  </Switch>
)

export default NavSwitcher
