import React from 'react'
import { NavLink } from 'react-router-dom'

import g from './global.module.css'

const Nav = () => (
  <nav className={g.nav}>
    <NavLink className={g.navLink} to='/projects'>Projects</NavLink>
    <NavLink className={g.navLink} to='/about'>About</NavLink>
    <NavLink className={g.navLink} to='/contact'>Contact</NavLink>
  </nav>
)

export default Nav