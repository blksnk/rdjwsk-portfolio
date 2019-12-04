import React from 'react'
import { Text, CardTitle, BtnLink } from '../components/Text.js'
import { getProjects } from '../helpers/storage.js'


import s from './Projects.module.css'
import arrow from '../assets/images/arrow.svg'

const Card = ({ project, setExpandedIndex, expandIndex, index }) => {
  const { name, link, thumb, description } = project
  const expanded = expandIndex === index ? true : false
  const expandIfNeeded = () => setExpandedIndex(expanded ? undefined : index)
  return (
    <article className={`${s.card} ${expanded ? s.expanded : ''}`} >
      <button className={s.cardExpandBtn} onClick={expandIfNeeded}>
        <img src={arrow} alt="expand"/>
      </button>
      <div className={s.cardTextContainer}>
        <div>
          <CardTitle>{name}</CardTitle>
          <Text>{description}</Text>
        </div>
        <BtnLink target='_blank' rel='noopener noreferrer' href={link}>Play</BtnLink>
      </div>
      <div className={s.cardThumbContainer} onClick={expandIfNeeded}>
        <img className={s.cardThumb} src={thumb} alt={name}/>
      </div>
    </article>
  )
}

const NewCard = ({ project }) => {
  const { isVideo, title, source, description } = project
  const url = `${process.env.REACT_APP_DATABASE_URL}${source.url}`
  return (
    <article className={s.projectCard}>
      <h2 className={s.title}>{title}</h2>
      {description
        ? <Text>{description}</Text>
        : null}
      <div className={s.cardMediaWrapper}>
        {isVideo
          ? <video src={url} controls muted></video>
          : <audio src={url} controls></audio>
        }
      </div>
    </article>
  )
}

const Projects = ({ sourceData }) => {
  const [ data, setData ] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getProjects()
      setLoaded(true)
      setData(response)
    }
    if(!loaded) {
      getData()
    }
  })
  return (
    <section className={s.page}>
      {data.map((item, index) => (
        <NewCard project={item} key={`project${index}`}/>
      ))}
    </section>
  )
}

export default Projects