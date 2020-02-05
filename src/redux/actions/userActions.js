import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { SET_USER } from './actionTypes'

const cookies = new Cookies()

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}

export const signOut = () => {
  return (dispatch) => {
    cookies.remove('testUser')
    dispatch(setUser(''))
  }
}

export const authenticateUser = (data) => {
  return (dispatch) => {
    axios.default
      .post('auth/adminAuthenticate', data)
      .then((response) => {
        cookies.set('testUser', response.data.token, { path: '/' })
        dispatch(setUser(jwtDecode(response.data.token).email))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
