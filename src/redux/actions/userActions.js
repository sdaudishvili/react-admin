import { SET_USER } from './actionTypes'

const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}

export default setUser
