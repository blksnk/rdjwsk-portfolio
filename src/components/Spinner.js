import React from 'react'
import s from './global.module.css'

const Spinner = ({ className }) => (
  <div className={`${s.spinner} ${className ? className : ''}`}>
    <div className={s.doubleBounce1}></div>
    <div className={s.doubleBounce2}></div>
  </div>
)

export default Spinner