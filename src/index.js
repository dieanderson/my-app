import React from 'react'
import { render }from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'
import { green } from '@mui/material/colors'

import { AuthProvider } from './state/auth'

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

const rootElement = document.getElementById("root")

render(  
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ThemeProvider>   
    </React.StrictMode>
  , rootElement )
