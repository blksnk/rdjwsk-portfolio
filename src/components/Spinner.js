import React from 'react'
import s from './global.module.css'

const Spinner = () => (
  <div className={s.spinner}>
    <div className={s.doubleBounce1}></div>
    <div className={s.doubleBounce2}></div>
  </div>
)

export default Spinner