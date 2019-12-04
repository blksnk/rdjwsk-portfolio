import React from 'react'
import { Text } from '../components/Text.js'
import Spinner from '../components/Spinner.js'
import { getVideo, getAudio } from '../helpers/storage.js'

import s from './Projects.module.css'

const NewCard = ({ isVideo, project }) => {
  const { title, source, description } = project
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

export const Audio = () => {
  const [ data, setData ] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getAudio()
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

export const Video = () => {
  const [ data, setData ] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getVideo()
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
        <NewCard isVideo project={item} key={`project${index}`}/>
      ))}
    </section>
  )
}