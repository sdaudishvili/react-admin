import { SET_CONTACTS, SET_CONTACTS_ERROR, SET_CONTACTS_LOADING } from '../actions/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS_LOADING: {
      return {
        ...state,
        loading: true,
        data: {},
        error: {}
      }
    }
    case SET_CONTACTS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: {}
      }
    }
    case SET_CONTACTS_ERROR: {
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
