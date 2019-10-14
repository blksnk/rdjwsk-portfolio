import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav.js'
import g from './global.module.css'

const SideNav = () => (
  <aside className={g.sideNav}>
    <Title/>
    <Nav/>
  </aside>
)

const Title = () => (
  <NavLink to='/projects' className={g.title}>
    <span className={g.titleLetter}>R</span>
    <span className={g.titleLetter}>D</span>
    <span className={g.titleLetter}>J</span>
    <span className={g.titleLetter}>W</span>
    <span className={g.titleLetter}>S</span>
    <span className={g.titleLetter}>K</span>
  </NavLink>
)

export default SideNav