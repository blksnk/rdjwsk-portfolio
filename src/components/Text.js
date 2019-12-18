import React from 'react'
import g from './global.module.css'

const className = (component, custom) => {
  // console.log(g[component], custom)
  const cn = custom ? `${g[component]} ${custom}` : g[component]
  return cn
}

export const PageTitle = ({ children, ...props }) => (
  <h1  className={className('pageTitle', props.className)} >
    {children}
  </h1>
)

export const Text = ({ children, ...props }) => (
  <p className={className('text', props.className)} >
    {children}
  </p>
)

export const CardTitle = ({ children, ...props }) => (
  <h2 className={className('cardTitle', props.className)} {...props}>
    {children}
  </h2>
)

export const Btn = ({ children, ...props }) => (
  <button className={g.btn} {...props}>{children}</button>
)

export const BtnLink = ({ children, ...props }) => (
  <a className={g.btnLink} {...props}><Btn>{children}</Btn></a>
)