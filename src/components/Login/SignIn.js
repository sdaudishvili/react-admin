import React from 'react'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import SignInAvatar from './SignInAvatar'
import SignInForm from './SignInForm'
import Copyright from './Copyright'

import { authenticateUser } from '../../redux/actions/userActions'

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10
  }
})

export default function SignIn() {
  const error = useSelector((state) => state.userState.error)
  const dispatch = useDispatch()

  function Submit(e) {
    e.preventDefault()
    const arr = [...e.target.elements]
    const data = { email: '', password: '' }
    arr.map((elem) => {
      if (elem.name === 'email' || elem.name === 'password') {
        data[elem.name] = elem.value
      }
      return ''
    })
    dispatch(authenticateUser(data))
  }
  return (
    <ThemeProvider theme={theme}>
      <Container className="[ pt-8-0 flex flex-col items-center ]" component="main" maxWidth="xs">
        <SignInAvatar />
        <SignInForm onSubmit={Submit} error={error} />
        <Copyright />
      </Container>
    </ThemeProvider>
  )
}
