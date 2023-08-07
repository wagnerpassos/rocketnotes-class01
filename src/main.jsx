import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js';
import GlobalStyles from './styles/global.js';
import { New } from './pages/New'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <New />
    </ThemeProvider>
  </React.StrictMode>,
)
