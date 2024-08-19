import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <div>
      <Navbar></Navbar>
    </div>

   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
   </Routes>


   </div>
  )
}

export default App
