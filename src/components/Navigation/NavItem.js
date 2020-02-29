import React from 'react'

import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <li className="[ hover:bg-nav-hover-bg hover:opacity-80 ]">
      <NavLink className="[ block w-full text-nav-text py-0-5 px-1-0 ]" to={props.path}>
        {props.title}
      </NavLink>
    </li>
  )
}
export default NavItem
