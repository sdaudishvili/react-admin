import { SET_CONTACTS } from '../actions/actionTypes'

const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS: {
      console.log(action)
      return state
    }
    default:
      return state
  }
}

export default reducer
