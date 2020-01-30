import React from 'react'

import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="[ font--size--h-i-vi ]">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
