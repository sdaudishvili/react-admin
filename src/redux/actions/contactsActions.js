import { SET_CONTACTS, SET_CONTACTS_ERROR, SET_CONTACTS_LOADING } from './actionTypes'

export const setContacts = (payload) => {
  return {
    type: SET_CONTACTS,
    payload
  }
}
export const setContactsError = (payload) => {
  return {
    type: SET_CONTACTS_ERROR,
    payload
  }
}
export const setContactsLoading = (payload) => {
  return {
    type: SET_CONTACTS_LOADING,
    payload
  }
}

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(setContactsLoading())
    axios.default
      .get('contacts')
      .then((response) => {
        const data = response.data
        dispatch(setContacts(data))
      })
      .catch((error) => {
        dispatch(setContactsError(error))
      })
  }
}

export const updateContacts = (data) => {
  return () => {
    axios.default
      .post('contacts', data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
