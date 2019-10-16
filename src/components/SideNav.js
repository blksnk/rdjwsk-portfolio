import React from 'react'
import ChangeColor from './ChangeColor.js'
import g from './global.module.css'

const SideNav = () => {
  const [ easter, setEaster ] = React.useState(0)
  return (
    <div className={g.sideNav}>
      <Title setEaster={setEaster} easter={easter}/>
      {easter >= 6
        ? <ChangeColor/>
        : null}
    </div>
  )
}

const Title = ({ setEaster, easter }) => {
  const t = 'RDJWSK'
  return (
  <h1 className={g.title}>
    {t.split('').map(l => 
      <span onClick={() => setEaster(easter + 1)} key={l} className={g.titleLetter}>{l}</span>
    )}
  </h1>
)}



export default SideNav