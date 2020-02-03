import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'
import aboutReducer from './reducers/aboutReducer'
import imageReducer from './reducers/imageReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  about: aboutReducer,
  uploadedImage: imageReducer
})

export default rootReducer
