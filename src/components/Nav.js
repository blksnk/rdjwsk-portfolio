import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { TweenMax, Power2 } from 'gsap'
import { getBackground } from '../helpers/storage.js'
import { PageTitle } from './Text.js'

import g from './global.module.css'

const Nav = ({ history }) => {

  return (
  <nav className={g.nav}>
    <NavBtn className={g.navLink} to='/audio'>Music</NavBtn>
    <NavBtn className={g.navLink} to='/video'>Videos</NavBtn>
    <NavBtn className={g.navLink} to='/about'>About</NavBtn>
    <NavBtn className={g.navLink} to='/contact'>Contact</NavBtn>
  </nav>
)}

const NavBtn = ({ history, className, to, children, images }) => {
  
  return (
    <a className={className} href={to} onClick={e => transitionAndRedirect(e, history, to, images)}>{children}</a>
  )
}

const transitionAndRedirect = (e, history, to, images) => {
  e.preventDefault()
  e.stopPropagation()
  const overlay = document.querySelector('.transition-overlay')
  const img = chooseRandomImage(images)
  TweenMax.set(overlay, { backgroundImage: `url(${img})` })
  TweenMax.set(overlay, { right: 0, delay: .1 })
  TweenMax.set(overlay, {right: '100vw', delay: 1.1})
  setTimeout(() => {
    history.push(to)
  }, 500)
}

const chooseRandomImage = (images) => {
  console.log(images)
  return images[Math.floor(Math.random() * (images.length - 1))]
}

export const TopNav = ({ current, history }) => {
  const [ images, setImages ] = React.useState([])
  React.useEffect(() => {
    const get = async () => {
      const res = await getBackground()
      const urls = res.map(item => process.env.REACT_APP_DATABASE_URL + item.source.url)
      setImages(urls)
    }
    get()
  }, [])
  return (
  <div className={g.topNavWrapper}>
    {current === 'audio'
    ? <PageTitle>Musics</PageTitle>
    : <NavBtn images={images} history={history} className={g.navLink} to='/audio'>Music</NavBtn>}

    {current === 'video'
    ? <PageTitle>Videos</PageTitle>
    : <NavBtn images={images} history={history} className={g.navLink} to='/video'>Videos</NavBtn>}

    {current === 'about'
    ? <PageTitle>About</PageTitle>
    : <NavBtn images={images} history={history} className={g.navLink} to='/about'>About</NavBtn>}

    {current === 'contact'
    ? <PageTitle>Contact</PageTitle>
    : <NavBtn images={images} history={history} className={g.navLink} to='/contact'>Contact</NavBtn>}
  </div>
)}

export default withRouter(Nav)