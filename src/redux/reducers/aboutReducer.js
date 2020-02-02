import { SET_ABOUT, SET_ABOUT_LOADING, SET_ABOUT_ERROR } from '../actions/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABOUT_LOADING: {
      return {
        ...state,
        loading: true,
        data: {},
        error: {}
      }
    }
    case SET_ABOUT: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: {}
      }
    }
    case SET_ABOUT_ERROR: {
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      }
    }
    default:
      return state
  }
}

export default reducer
