import { SET_CONTACTS } from './actionTypes'

export const setContacts = (payload) => {
  return {
    type: SET_CONTACTS,
    payload
  }
}

export const fetchContacts = () => {
  return (dispatch) => {
    axios.default
      .get('contacts')
      .then((response) => {
        const data = response.data
        dispatch(setContacts(data))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
