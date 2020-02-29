import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../redux/actions/userActions'

function DefaultLayoutHeader() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userState.user)

  function handleClick() {
    dispatch(signOut())
  }

  return (
    <header>
      <div className="[ h-7-0 px-5-0 fixed left-0 top-0 right-0 text-white z-2 bg-header text-2-0 ]">
        <div className="[ h-full flex justify-end items-center ]">
          <div className="[ mr-3-0 cursor-pointer ]">{user}</div>
          <div className="[ hover:opacity-60 ]" tabIndex="0" role="button" onClick={handleClick}>
            Log out
          </div>
        </div>
      </div>
    </header>
  )
}

export default DefaultLayoutHeader
