import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageTitle } from './Text.js'

import g from './global.module.css'

const Nav = () => (
  <nav className={g.nav}>
    <NavLink className={g.navLink} to='/projects'>Projects</NavLink>
    <NavLink className={g.navLink} to='/about'>About</NavLink>
    <NavLink className={g.navLink} to='/contact'>Contact</NavLink>
  </nav>
)

export const TopNav = ({ current }) => (
  <div className={g.topNavWrapper}>
    {current === 'projects'
    ? <PageTitle>Projects</PageTitle>
    : <NavLink className={g.navLink} to='/projects'>Projects</NavLink>}

    {current === 'about'
    ? <PageTitle>About</PageTitle>
    : <NavLink className={g.navLink} to='/about'>About</NavLink>}

    {current === 'contact'
    ? <PageTitle>Contact</PageTitle>
    : <NavLink className={g.navLink} to='/contact'>Contact</NavLink>}
  </div>
)

export default Nav