import React from 'react'
// eslint-disable-next-line import/no-cycle
import routes from '../pages/routes'
import Navigation from '../components/Navigation/Navigation'

function DefaultLayoutSideBar() {
  return (
    <div className="[ w-27-5 py-3-0 bg-sidebar-bg ]">
      <Navigation routes={routes} />
    </div>
  )
}

export default DefaultLayoutSideBar
