import React from 'react'
import { Text } from '../components/Text.js'
import Spinner from '../components/Spinner.js'
import { getVideo, getAudio } from '../helpers/storage.js'

import s from './Projects.module.css'

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

const Projects = ({ isVideo }) => {
  const [ data, setData ] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      let response
      if(isVideo) {
        response = await getVideo()
      } else {
        response = await getAudio()
      }
      setLoaded(true)
      setData(response)
    }
    if(!loaded) {
      getData()
    }
  })
  return (
    <section className={s.page}>
      {!loaded
        ? <Spinner/>
        : null
      }
      {data.map((item, index) => (
        <NewCard project={item} key={`project${index}`}/>
      ))}
    </section>
  )
}

export default Projects