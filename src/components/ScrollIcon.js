import React from 'react'
import g from './global.module.css'
import svg from '../assets/images/scroll.svg'

const ScrollIcon = () => {
  const [ draw, setDraw ] = React.useState(false)
  const [ vh, setVh ] = React.useState(1)
  const [ sh, setSh ] = React.useState(1)

  setTimeout(() => {
    setSh(document.querySelector('section').scrollHeight)
    setVh(window.innerHeight)
    console.log(sh, vh)
    setDraw(true)
  }, 50)


  if(!draw) {
    return null
  } else if(sh > vh) {
    return (
      <svg className={g.scrollIcon} xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="2rem">
        <rect width="1.2rem" height="2rem" strokeWidth="1" stroke="#eae8db" fill='transparent' rx=".6rem" ry=".6rem"/>
        <line stroke="#eae8db" strokeWidth="2" x1=".6rem" y1=".5rem" x2=".6rem" y2="1.5rem"/>
      </svg>
    )
  } else {
    return null
  }
}

export default ScrollIcon