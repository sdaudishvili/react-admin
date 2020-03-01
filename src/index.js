import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App'
import store from './redux/store'
import './assets/App.scss'
import './assets/tailwind.css'
import './assets/sass/style.scss'

require('babel-core/register')
require('babel-polyfill')

// Tell Material-UI what's the font-size on the html element is.
const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
