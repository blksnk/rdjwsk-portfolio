import axios from 'axios'

const apiRootUrl = 'https://www.googleapis.com/drive/v2'

export const listAllFiles = async (folderId) => {
  try{
    const id = process.env.REACT_APP_SITE_FOLDER_KEY
    const url = `${apiRootUrl}/files/${id}/children?key=${process.env.REACT_APP_API_KEY}`
    console.log(process.env, url)
    const res = await axios.get(url)
    console.log(res)
    return res
  } catch(e) {
    console.error(e)
  }
}