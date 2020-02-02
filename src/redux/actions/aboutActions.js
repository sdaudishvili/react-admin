import { SET_ABOUT, SET_ABOUT_ERROR, SET_ABOUT_LOADING } from './actionTypes'

export const setAbout = (payload) => {
  return {
    type: SET_ABOUT,
    payload
  }
}
export const setAboutError = (payload) => {
  return {
    type: SET_ABOUT_ERROR,
    payload
  }
}
export const setAboutLoading = (payload) => {
  return {
    type: SET_ABOUT_LOADING,
    payload
  }
}

export const fetchAbout = () => {
  return (dispatch) => {
    dispatch(setAboutLoading())
    axios.default
      .get('about')
      .then((response) => {
        const data = response.data
        dispatch(setAbout(data))
      })
      .catch((error) => {
        dispatch(setAboutError(error))
      })
  }
}

export const updateAbout = (data) => {
  return () => {
    axios.default
      .post('about', data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
