import { useState } from 'react'
import { HashRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}  />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
