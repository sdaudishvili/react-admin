import axios from 'axios'
import { SET_CONTACTS } from './actionTypes'

export const setContacts = (payload) => {
  return {
    type: SET_CONTACTS,
    payload
  }
}

export const fetchContacts = () => {
  return () => {
    try {
      const data = axios.get('https://api.mediacritic.ge/api/contact')
      console.log(data)
      // dispatch(setContacts(data))
    } catch (err) {
      console.log(err)
    }
  }
}
