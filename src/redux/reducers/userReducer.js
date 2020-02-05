import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { SET_USER } from '../actions/actionTypes'

function getInitialState() {
  const cookies = new Cookies()
  const token = cookies.get('testUser')
  if (token !== undefined) {
    return {
      user: jwtDecode(token).email
    }
  }
  return {
    user: ''
  }
}

const initialState = getInitialState()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log(action)
      return {
        user: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
