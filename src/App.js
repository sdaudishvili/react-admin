import React from 'react'

import { useSelector } from 'react-redux'
// import Footer from './layout/Footer'
import Header from './layout/Header'
import SideBar from './layout/SideBar'
import Loader from './components/molecules/Loader'
import Notifications from './components/organisms/Notifications'

import NavSwitcher from './components/molecules/NavSwitcher'
import LoginPage from './pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const notifs = useSelector((state) => state.notifs)
  return (
    <LoginPage />
    // <>
    //   <Header />
    //   <div className="d-flex main-container-wrapper">
    //     <div className="side-bar">
    //       <SideBar />
    //     </div>
    //     <div className="page-content media-body">
    //       <NavSwitcher />
    //     </div>
    //   </div>
    //   <Notifications {...notifs} />
    //   {notifs.loading && <Loader loading={notifs.loading} />}
    // </>
  )
}

export default App
