import axios from 'axios'

export default axios.create({
  // baseURL: `https://api.mediacritic.ge/api/`
  baseURL: `http://localhost:3001/api/`
})
