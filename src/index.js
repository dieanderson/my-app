import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'
import { green } from '@mui/material/colors'

const theme =  createTheme({
  palette: {
    primary:{
      main: green[400],
    },
    secondary:{
      main: green[900],
    } 
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>   
  </React.StrictMode>,
  document.getElementById('root')
)
