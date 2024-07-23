import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { Router } from './router'
import { lightTheme } from './utils/themeProvider'


function App() {
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={lightTheme}>
            <Router/>
        </ThemeProvider>
      </CssBaseline>
    </>
  )
}

export default App
