import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Router } from './Router'

import AppProvider from './hooks'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}
