
import './App.css'
import { Background } from './atoms/background/background';
import { Test } from './sections/test';
import { Navbar } from './components/navbar';
import { Hero } from './sections/hero';
import { Projects } from './sections/projects';
function App() {
  return (
    <>
        <Background>
          <Navbar />
          <Hero/>
          <Projects/>
        </Background>
    </>
  )
}

export default App
