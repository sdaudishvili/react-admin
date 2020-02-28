import React from 'react'
// eslint-disable-next-line import/no-cycle
import routes from '../pages/routes'
import Navigation from '../components/Navigation/Navigation'

function SideBar() {
  return <Navigation routes={routes} />
}

export default SideBar
