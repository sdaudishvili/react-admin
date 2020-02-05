import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import Input from '../components/molecules/Input'
import setUser from '../redux/actions/userActions'
import '../assets/App.scss'
import '../assets/sass/style.scss'

function Login() {
  const cookies = new Cookies()
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function onSubmit() {
    dispatch(setUser(data))
    cookies.set('user', 'user', { path: '/' })
  }

  return (
    <main id="main" role="main" className="auth-page">
      <section className="auth-wrapper">
        <div className="auth-wrapper__body">
          <div className="auth-wrapper__header">
            <h3>Authorization form</h3>
          </div>
          <div className="auth-wrapper__body__item">
            <Input
              type="text"
              label="Username"
              value={data.username || ''}
              handleInput={handleInput}
              name="username"
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
            <button className="btn btn-primary [ font--size--main ]" onClick={onSubmit}>
              Log in
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
