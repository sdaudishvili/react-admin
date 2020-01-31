import { SET_ABOUT } from '../actions/actionTypes'

const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABOUT: {
      console.log(action)
      return state
    }
    default:
      return state
  }
}

export default reducer
