import { useState } from "react"
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut,faSign,faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"

function Header() {

  return (
    <div className='sticky top-0 bg-slate-800 md:p-3 px-2 py-4 shadow-lg'>
     <div className='flex justify-between items-center  px-2'>
        <h2 className='text-white flex items-center md:font-bold font-bold text-md md:text-3xl' id="icontitle">
        
          Web[<span className="text-yellow-600 md:text-2xl"> Docs</span></h2>
       
        <div className='md:font-bold font-medium text-white flex'>
           <div className='mx-3 px-4 py-0' id='divide'>
           <Link className='mx-3' id="compo">Docs</Link>
           <Link className='mx-3' id="compo">Component</Link>
           <Link className='md:mx-3 mx-2' to="/somme/blog">Blog</Link>
            <FontAwesomeIcon icon={faSun} className='mx-2 text-yellow-600'/>
           </div>
           <Link to="/signin" className="md:mx-3" >Sign In</Link>
            <Link to="/somme"  className='border-none md:mx-2 p-1 rounded-lg bg-black text-white' id="compo">Get All Access <FontAwesomeIcon icon={faSignOut}/></Link>
        </div>
     </div>
    </div>
  )
}

export default Header
