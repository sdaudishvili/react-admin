import React from 'react'

import NavItem from './NavItem'

function Navigation(props) {
  return (
    <nav className="[ text-1-6 ]">
      <ul>
        {props.routes.map((e) => (
          <NavItem path={e.path} title={e.title} key={e.id} />
        ))}
      </ul>
    </nav>
  )
}
export default Navigation
