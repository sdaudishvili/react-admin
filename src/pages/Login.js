import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import Input from '../components/molecules/Input'
import { authenticateUser } from '../redux/actions/userActions'
import '../assets/App.scss'
import '../assets/sass/style.scss'

function Login() {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.userState.error)
  const [data, setData] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function Submit(e) {
    e.preventDefault()
    dispatch(authenticateUser(data))
  }
  return (
    <main id="main" role="main" className="auth-page">
      <section className="auth-wrapper">
        <div className="auth-wrapper__body">
          <div className="auth-wrapper__header">
            <h3>Authorization form</h3>
          </div>
          {error !== '' && <div>{error}</div>}
          <form onSubmit={Submit}>
            <div className="auth-wrapper__body__item">
              <Input
                type="text"
                label="Email"
                value={data.email || ''}
                handleInput={handleInput}
                name="email"
              />
            </div>
            <div className="auth-wrapper__body__item">
              <Input
                type="password"
                label="Password"
                value={data.password || ''}
                handleInput={handleInput}
                name="password"
              />
            </div>
            <div className="auth-wrapper__body__item">
              <button type="submit" className="btn btn-primary [ font--size--main ]">
                Log in
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
