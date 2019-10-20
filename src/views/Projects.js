import React from 'react'
import { Text, CardTitle, BtnLink } from '../components/Text.js'

import s from './Projects.module.css'
import arrow from '../assets/images/arrow.svg'

const data = [
  {
    name: 'Project title',
    description: 'In ad laborum sint.',
    link: 'http://www.google.com',
    thumb: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
  },
  {
    name: 'Project title',
    description: 'Amet pariatur commodo deserunt ullamco nostrud tempor in cillum in cillum eu culpa velit sint.',
    link: 'www.google.com',
    thumb: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
  },
  {
    name: 'Est ullamco veniam.',
    description: 'In ad laborum sint.',
    link: 'www.google.com',
    thumb: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
  },
  {
    name: 'Project title',
    description: 'In ad laborum sint.',
    link: 'www.google.com',
    thumb: 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
  },

]

const Card = ({ project, setExpandedIndex, expandIndex, index }) => {
  const { name, link, thumb, description } = project
  const expanded = expandIndex === index ? true : false
  return (
    <article className={`${s.card} ${expanded ? s.expanded : ''}`} >
      <button className={s.cardExpandBtn} onClick={e => setExpandedIndex(expanded ? undefined : index)}>
        <img src={arrow} alt="expand"/>
      </button>
      <div className={s.cardTextContainer}>
        <div>
          <CardTitle>{name}</CardTitle>
          <Text>{description}</Text>
        </div>
        <BtnLink target='_blank' rel='noopener noreferrer' href={link}>Play</BtnLink>
      </div>
      <div className={s.cardThumbContainer}>
        <img className={s.cardThumb} src={thumb} alt={name}/>
      </div>
    </article>
  )
}

const Projects = ({ sourceData }) => {
  const source = sourceData ? sourceData : data
  const [ expandIndex, setExpandedIndex ] = React.useState(undefined)
  return (
    <section className={s.page}>
      {source.map((item, index) => <Card {...{
        project: item,
        key: index,
        index,
        expandIndex,
        setExpandedIndex
      }}/>)}
    </section>
  )
}

export default Projects