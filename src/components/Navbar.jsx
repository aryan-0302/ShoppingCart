import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

import {NavLink} from "react-router-dom"

 const Navbar = () => {
 const {cart}=useSelector((state)=>state);
  return (
    <div className='bg-slate-900 ' >
      <nav className='flex items-center h-20 max-w-6xl mx-auto justify-between'>
        <NavLink to="/">
          <div className='ml-5'>
          <img src='../logo.png' className='h-14'></img>
          </div>
        </NavLink>

        <input className='' type="text" placeholder="Search"></input>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/">
            <div className='hover:outline'>
            <p>Home</p>
            </div>
          
          </NavLink>
         
         <NavLink to="/cart">
          <div className='relative hover:outline'>
          <FaShoppingCart className='text-2xl'></FaShoppingCart>
          {
            cart.length >0 &&
            <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
          }
          </div>
         </NavLink>

         <NavLink to="/login">
          <p className='hover:outline'>Login</p>
         </NavLink>

         
          
        </div>
      </nav>
    </div>
  )
}
export default Navbar