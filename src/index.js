import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/store'
import './assets/App.scss'
import './assets/tailwind.css'
import './assets/sass/style.scss'

require('babel-core/register')
require('babel-polyfill')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
