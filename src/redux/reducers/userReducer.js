import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { SET_USER, SET_AUTH_ERR } from '../actions/actionTypes'
import { setToken } from '../../plugins/axios'

function getInitialState() {
  const cookies = new Cookies()
  const token = cookies.get('testUser')
  if (token !== undefined) {
    setToken(token)
    return {
      user: jwtDecode(token).email,
      error: ''
    }
  }
  return {
    user: '',
    error: ''
  }
}

const initialState = getInitialState()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload,
        error: ''
      }
    }
    case SET_AUTH_ERR: {
      return {
        user: '',
        error: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
