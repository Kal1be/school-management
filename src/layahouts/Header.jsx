import { useState } from "react"
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut,faSign,faLightbulb, faSun,faUser } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"
import img from '../img/webdocs icon.png'

function Header() {

  return (
    <div className='sticky top-0 bg-slate-800 md:p-3 px-2 py-4 shadow-lg'>
     <div className='flex justify-between items-center  px-2'>
        <h2 className='text-white flex items-center md:font-bold font-bold text-md md:text-3xl' id="icontitle">
        <img src={img} alt="" className="md:w-10 -mt-3 md:me-2 w-7 me-1 "/>
          Web[<span className="text-yellow-600 md:text-2xl"> Docs</span></h2>
       
        <div className='md:font-bold font-medium text-white flex'>
           <div className='mx-3 px-4 py-0' id='divide'>
           <Link className='mx-3' id="compo">Bloc</Link>
           <Link className='mx-3' id="compo">Component</Link>
           <Link className='md:mx-3 mx-1 sm:mx-1' to="/somme/blog">Docs</Link>
            <FontAwesomeIcon icon={faSun} className='mx-1 text-yellow-600'/>
           </div>
           <Link to="/signin" className="md:mx-3" >SignIn</Link>
            <Link to="/somme"  className='border-none md:mx-2 p-1 rounded-lg bg-black text-white' id="compo">Get All Access <FontAwesomeIcon icon={faSignOut}/></Link>
            <div className="w-10 bg-white rounded-full h-10 items-center text-black pt-2 ps-3" id="compo">
              <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Header
