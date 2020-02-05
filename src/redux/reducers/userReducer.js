import Cookies from 'universal-cookie'
import { SET_USER } from '../actions/actionTypes'

function getInitialState() {
  const cookies = new Cookies()
  const user = cookies.get('user')
  if (user !== undefined) {
    return {
      user
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
      return {
        user: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
