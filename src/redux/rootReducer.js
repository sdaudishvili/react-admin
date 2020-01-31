import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'
import aboutReducer from './reducers/aboutReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  about: aboutReducer
})

export default rootReducer
