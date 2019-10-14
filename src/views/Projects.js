import React from 'react'
import s from './Projects.module.css'

import { TopNav } from '../components/Nav.js'
import { PageTitle } from '../components/Text.js'

const Projects = () => {
  return (
    <section>
      <TopNav current='projects'/>
    </section>
  )
}

export default Projects