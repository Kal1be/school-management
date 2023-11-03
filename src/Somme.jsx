import React from 'react'
import Navbar from './layahouts/Navbar'
import Home from './pages/Home'
import Header from "./layahouts/Header"
import Contact from "./pages/Contact"
import Blog from './pages/Blog'
import Html from './pages/Html'
import {Routes,Route} from "react-router-dom"

function Somme() {
  return (
    <div>
       <Header/>
   <div className="flex">
      <div className='w-70 bg-gray-200'>
        <Navbar/>
      </div>
      <div className="static md:ms-72 overflow-x-hidden">
       je suis
      </div>
    </div>
    </div>
  )
}

export default Somme
