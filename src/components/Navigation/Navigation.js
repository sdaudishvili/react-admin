import React from 'react'

import NavItem from './NavItem'

function Navigation(props) {
  return (
    <nav className="[ font--size--h-i-vi ]">
      <ul className="nav flex-column">
        {props.routes.map((e) => (
          <NavItem path={e.path} title={e.title} key={e.id} />
        ))}
      </ul>
    </nav>
  )
}
export default Navigation
