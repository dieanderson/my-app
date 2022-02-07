import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'
import { red, deepPurple } from '@mui/material/colors'

const theme =  createTheme({
  palette: {
    primary:{
      main: red[900],
    },
    secondary:{
      main: deepPurple[900]
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
