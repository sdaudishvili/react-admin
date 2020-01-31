import axios from 'axios'
import { SET_CONTACTS } from './actionTypes'

export const setContacts = (payload) => {
  return {
    type: SET_CONTACTS,
    payload
  }
}

export const fetchContacts = () => {
  return (dispatch) => {
    axios
      .get('https://api.mediacritic.ge/api/contact')
      .then((response) => {
        const data = response.data.data
        dispatch(setContacts(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
