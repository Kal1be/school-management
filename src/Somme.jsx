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
      <div className="static md:ms-72 overflow-x-hidden mt-8">
        <h2 className='text-center font-bold text-xl text-slate-700'>Bienvenue a WebDocs une plateforme d'apprentissage en ligne</h2>
     <p className='mx-2 my-2'> WebDocs est une plateforme d'apprentissage en ligne,vous pourrez apprendre presque et tous sa gratuitement,ce plateforme
       a ete creer pour aider les etudiants passionner d'informatique a grimper leurs niveaux et etre au top.</p>
      </div>
      
    </div>
    </div>
  )
}

export default Somme
