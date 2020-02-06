import axios from 'axios'

const restApi = axios.create({
  // baseURL: `https://api.mediacritic.ge/api/`
  baseURL: `http://localhost:3001/api/`
})

export function setToken(token) {
  restApi.defaults.headers.common.Authorization = token
}

restApi.interceptors.request.use((config) => {
  return config
})

export default restApi
