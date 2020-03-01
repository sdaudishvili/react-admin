import React from 'react'
import DefaultLayoutBody from './DefaultLayoutBody'
// eslint-disable-next-line import/no-cycle
import DefaultLayoutSideBar from './DefaultLayoutSideBar'
import MaterialUiHeader from './MaterialUiHeader'

function DefaultLayout(props) {
  return (
    <>
      <MaterialUiHeader />
      <div className="[ flex min-h-full ]">
        <DefaultLayoutSideBar />
        <DefaultLayoutBody>{props.children}</DefaultLayoutBody>
      </div>
    </>
  )
}

export default DefaultLayout
