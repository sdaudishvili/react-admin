import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../../pages/routes'

function NavSwitcher() {
  const elems = routes.map((route) => (
    <Route key={route.id} exact path={route.path}>
      <route.layout>
        <route.component />
      </route.layout>
    </Route>
  ))
  return (
    <Switch>
      {elems}
      <Route path="*">notfound</Route>
    </Switch>
  )
}

export default NavSwitcher
