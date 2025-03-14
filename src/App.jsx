import { Box } from '@mui/material'
import './App.css'
import { useTheme } from '@emotion/react'
import { Background } from './atoms/background/background';
import { Test } from './pages/test/test';
function App() {
  const theme =  useTheme();
  return (
    <>
    <Background>
      <Test/>
    </Background>
    </>
  )
}

export default App
