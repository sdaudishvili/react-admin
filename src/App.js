import React from 'react'

// import Footer from './layout/Footer'
import Header from './layout/Header'
import SideBar from './layout/SideBar'

import NavSwitcher from './components/molecules/NavSwitcher'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <div className="d-flex main-container-wrapper">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="page-content media-body">
          <NavSwitcher />
        </div>
      </div>
    </>
  )
}

export default App
