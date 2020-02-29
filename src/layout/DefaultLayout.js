import React from 'react'
import DefaultLayoutHeader from './DefaultLayoutHeader'
import DefaultLayoutBody from './DefaultLayoutBody'
// eslint-disable-next-line import/no-cycle
import DefaultLayoutSideBar from './DefaultLayoutSideBar'

function DefaultLayout(props) {
  return (
    <>
      <DefaultLayoutHeader />
      <div className="[ flex min-h-full pt-7-0 ]">
        <DefaultLayoutSideBar />
        <DefaultLayoutBody>{props.children}</DefaultLayoutBody>
      </div>
    </>
  )
}

export default DefaultLayout
