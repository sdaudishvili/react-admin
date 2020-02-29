import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Redirect, withRouter } from 'react-router-dom'
import Login from '../components/Login/Login'

function Auth(props) {
  const { slug } = useParams()
  const user = useSelector((state) => state.userState.user)
  if (props.location.pathname !== '/auth/login') {
    return <Redirect to="/auth/login" />
  }
  if (user !== '') {
    return <Redirect to="/" />
  }
  return (
    <div id="login" role="main">
      {slug === 'login' && <Login />}
    </div>
  )
}

export default withRouter(Auth)
