import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../redux/actions/userActions'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userState.user)
  function handleClick() {
    dispatch(signOut())
  }

  return (
    <header>
      <div className="header [ font--size--h-ii ]">
        <div className="header__wrapper [ size--height--full d-flex justify-content-end align-items-center ]">
          <div className="header__wrapper__account">{user}</div>
          <div className="header__wrapper__logout" tabIndex="0" role="button" onClick={handleClick}>
            Log out
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
