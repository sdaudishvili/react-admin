import React from 'react'

function AuthLayout(props) {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <h1>Auth Page</h1>
      </div>
      {props.children}
    </>
  )
}

export default AuthLayout
