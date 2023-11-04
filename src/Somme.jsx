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
      <div className="static md:ms-72 overflow-x-hidden mt-16">
       Vous ne savez pas par ou commencer?
       alore vous etes la bienvenue,ici nous fairons la defference entre le web developpement et la programmation
      </div>
    </div>
    </div>
  )
}

export default Somme
