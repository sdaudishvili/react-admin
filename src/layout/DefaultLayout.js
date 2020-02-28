import React from 'react'
import Header from './Header'
// eslint-disable-next-line import/no-cycle
import SideBar from './SideBar'

import 'bootstrap/dist/css/bootstrap.min.css'

function DefaultLayout(props) {
  return (
    <>
      <Header />
      <div className="d-flex main-container-wrapper">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="page-content media-body">{props.children}</div>
      </div>
    </>
  )
}

export default DefaultLayout
