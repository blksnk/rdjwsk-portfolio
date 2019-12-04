import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { PageTitle } from './Text.js'
import { TweenMax, Power2 } from 'gsap'

import g from './global.module.css'

const Nav = ({ history }) => (
  <nav className={g.nav}>
    <NavBtn className={g.navLink} to='/projects'>Projects</NavBtn>
    <NavBtn className={g.navLink} to='/about'>About</NavBtn>
    <NavBtn className={g.navLink} to='/contact'>Contact</NavBtn>
  </nav>
)

const NavBtn = ({ history, className, to, children }) => {
 return (
    <a className={className} href={to} onClick={e => transitionAndRedirect(e, history, to)}>{children}</a>
  )
}

const transitionAndRedirect = (e, history, to) => {
  e.preventDefault()
  e.stopPropagation()
  const overlay = document.querySelector('.transition-overlay')
  TweenMax.to(overlay, .3, {right: 0, ease: Power2.easeInOut})
  TweenMax.to(overlay, .3, {right: '100vw', ease: Power2.easeInOut}).delay(.4)
  setTimeout(() => {
    history.push(to)
  }, 300)
} 

export const TopNav = ({ current, history }) => (
  <div className={g.topNavWrapper}>
    {current === 'projects'
    ? <PageTitle>Projects</PageTitle>
    : <NavBtn history={history} className={g.navLink} to='/projects'>Projects</NavBtn>}

    {current === 'about'
    ? <PageTitle>About</PageTitle>
    : <NavBtn history={history} className={g.navLink} to='/about'>About</NavBtn>}

    {current === 'contact'
    ? <PageTitle>Contact</PageTitle>
    : <NavBtn history={history} className={g.navLink} to='/contact'>Contact</NavBtn>}
  </div>
)

export default withRouter(Nav)