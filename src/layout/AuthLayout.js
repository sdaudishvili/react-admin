import React from 'react'

function AuthLayout(props) {
  return (
    <>
      <h1 className="[ mt-3-0 text-center text-2-0 ]">Auth Page</h1>
      {props.children}
    </>
  )
}

export default AuthLayout
