import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js';
import GlobalStyles from './styles/global.js';
import { SignUp } from './pages/SignUp'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <SignUp />
    </ThemeProvider>
  </React.StrictMode>,
)
