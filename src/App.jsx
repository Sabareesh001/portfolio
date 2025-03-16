
import './App.css'
import { Background } from './atoms/background/background';
import { Test } from './sections/test';
import { Navbar } from './components/navbar';
function App() {
  return (
    <>
        <Background>
          <Navbar/>
          <Test/>
        </Background>
    </>
  )
}

export default App
