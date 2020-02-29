import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import Loader from './components/molecules/Loader'
import Notifications from './components/organisms/Notifications'
import NavSwitcher from './components/molecules/NavSwitcher'

function App(props) {
  const notifs = useSelector((state) => state.notifs)
  const user = useSelector((state) => state.userState.user)

  if (user === '' && props.location.pathname !== '/auth/login') {
    return <Redirect to="/auth/login" />
  }
  return (
    <>
      <NavSwitcher />
      <Notifications {...notifs} />
      {notifs.loading && <Loader loading={notifs.loading} />}
    </>
  )
}

export default withRouter(App)
