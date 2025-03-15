import { Box } from '@mui/material'
import './App.css'
import { useTheme } from '@emotion/react'
import { Background } from './atoms/background/background';
import { Test } from './pages/test/test';
import { ContextProvider } from './store/contextProvider';
function App() {
  return (
    <>
        <Background>
          <Test/>
        </Background>
    </>
  )
}

export default App
