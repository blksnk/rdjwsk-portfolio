import axios from 'axios'

export const getVideo = async () => {
  const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/videos`)
  return res.data
}

export const getAudio = async () => {
  const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/audio`)
  return res.data
}