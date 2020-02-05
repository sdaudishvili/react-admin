import { combineReducers } from 'redux'
import contactsReducer from './reducers/contactsReducer'
import aboutReducer from './reducers/aboutReducer'
import imageReducer from './reducers/imageReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  about: aboutReducer,
  uploadedImage: imageReducer,
  notifs: notificationReducer,
  userState: userReducer
})

export default rootReducer
