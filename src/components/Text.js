import React from 'react'
import g from './global.module.css'

const className = (component, custom) => custom ? `${g[component]} ${custom}` : g[component]

export const PageTitle = ({ children, ...props }) => (
  <h1 className={className('pageTitle', props.className)} {...props} >
    {children}
  </h1>
)

export const Text = ({ children, ...props }) => (
  <p className={className('text', props.className)} {...props} >
    {children}
  </p>
)