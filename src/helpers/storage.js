import axios from 'axios'

export const getProjects = async () => {
  const res = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/projects`)
  console.log(res)
  return res.data
}