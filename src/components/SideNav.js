import React from 'react'
import ChangeColor from './ChangeColor.js'
import g from './global.module.css'

const SideNav = () => {
  const [ easter, setEaster ] = React.useState(0)
  const incrementEaster = n => {
    if(easter >= 8) {
      setEaster(0)
    } else {
      setEaster(easter + 1)
    }
  }
  return (
    <div className={g.sideNav}>
      <Title incrementEaster={incrementEaster}/>
      {easter === 6
        ? <ChangeColor/>
        : null}
    </div>
  )
}

const Title = ({ incrementEaster }) => {
  const t = 'RDJWSK'
  return (
  <h1 className={g.title}>
    {t.split('').map(l => 
      <span onClick={incrementEaster} key={l} className={g.titleLetter}>{l}</span>
    )}
  </h1>
)}



export default SideNav