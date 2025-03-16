
import './App.css'
import { Background } from './atoms/background/background';
import { Test } from './sections/test';
import { Navbar } from './components/navbar';
import { Hero } from './sections/hero';
function App() {
  return (
    <>
        <Background>
          <Navbar />
          <Hero/>
        </Background>
    </>
  )
}

export default App
