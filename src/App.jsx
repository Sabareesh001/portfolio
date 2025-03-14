import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <div className="card">
        <div className='avatarBox'>
        <img height={'300rem'} width={'300rem'} src='https://avatars.githubusercontent.com/sabareesh001'></img>
        <div className='detailGrid'>
        <h1>Sabareesh T</h1>
        <div className='avatarGrid'>
        <a href='https://github.com/sabareesh001'><h2>Github</h2></a>
        <a href='https://linkedin.com/in/sabareesh001'><h2>Linkedin</h2></a>
        <a href='https://leetcode.com/sabareesh_001'><h2>Leetcode</h2></a>
        <a href='https://x.com/sabareesht4746'><h2>twitter</h2></a>
        </div>
        <h2></h2>
        </div>
        
        </div>
        </div>
    </>
  )
}

export default App
