import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Text } from '../components/Text.js'
import Spinner from '../components/Spinner.js'
import { getVideo, getAudio } from '../helpers/storage.js'
import playIcon from '../assets/icons/play_arrow.svg'
import pauseIcon from '../assets/icons/pause.svg'

import s from './Projects.module.css'

const NewCard = ({ isVideo, project, index }) => {
  const { title, source, description } = project
  const url = `${process.env.REACT_APP_DATABASE_URL}${source.url}`
  return (
    <article className={`${s.projectCard} ${isVideo ? s.cardVideo : ''}`}>
      <h2 className={s.title}>{title}</h2>
      {description
        ? <Text>{description}</Text>
        : null}
      <div className={s.cardMediaWrapper} >
        {isVideo
          ? <video src={url} controls preload="metadata" ></video>
          : <RenderWaveform url={url} index={index}/>
        }
      </div>
    </article>
  )
}

const wavesurferOptions = {
  waveColor: '#C2C1B4',
  progressColor: '#FFFF00',
  cursorColor: '#FFF',
  barGap: 2,
  barRadius: 0,
  barWidth: 2,
  height: 100,
  responsive: true,
  normalize: true,
}

const RenderWaveform = ({ url, index }) => {
  const [ waveHook, setWaveHook ] = React.useState(null)
  const [ loaded, setLoaded ] = React.useState(false)
  const [ playing, setPlaying ] = React.useState(false)

  const playPause = () => {
    if(waveHook) {
      if(!playing) {
        waveHook.play()
        setPlaying(true)
      } else {
        waveHook.pause()
        setPlaying(false)
      }
    }
  }

  const id = `wave${index}`

  React.useEffect(() => {
    const wave = WaveSurfer.create({
      container: `#${id}`,
      ...wavesurferOptions
    })

    wave.on('ready', () => {
      setLoaded(true)
    })

    wave.load(url)

    setWaveHook(wave)

    return () => {
      if(wave) {
        wave.on('ready', null)
        wave.pause()
      }
      if(waveHook) {
        waveHook.pause()
      }
    }
  }, [])

  return (
    <div className={s.waveContainer}>
      {!loaded
        ? <div className={s.spinnerWrapper}><Spinner/></div>
        : null}
      <div className={s.wave} id={id}></div>
      <button onClick={playPause} className={s.playBtn}>
        <img className={s.audioIcon} alt={playing ? 'pause' : 'play'} src={playing ? pauseIcon : playIcon}/>
      </button>
    </div>
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
  }, [])
  return (
    <section className={s.page}>
      {!loaded
        ? <Spinner className={s.pageSpinner}/>
        : null
      }
      {data.map((item, index) => (
        <NewCard project={item} index={index} key={`project${index}`}/>
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
        ? <Spinner className={s.pageSpinner}/>
        : null
      }
      {data.map((item, index) => (
        <NewCard isVideo project={item} key={`project${index}`}/>
      ))}
    </section>
  )
}