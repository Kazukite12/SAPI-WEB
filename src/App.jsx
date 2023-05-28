import { useState } from 'react'
import { HashRouter,Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Produk' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
