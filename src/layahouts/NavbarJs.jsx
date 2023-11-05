import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons'

function NavbarJs() {
    const [open,setOpen] =useState(true)
    const handleopen=()=>{
      setOpen(!open)
    }
    const closebouton=()=>{
      setOpen(true)
    }
    return (
  
     <>
    <div className="py-1  md:fixed fixed md:top-0 top-10 bg-slate-700 w-screen" id="btn">
    <div className="flex justify-between items-center">
    <div class="container me-2 ps-4 w-14 mt-2 " onClick={handleopen} >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  <marquee behavior="8" direction="" id="btne">
    <span className="mx-3">HTML</span>
    <span  className="mx-3">CSS3</span>
    <span  className="mx-3">JAVASCRIPT</span>
    <span  className="mx-3">REACT</span>
    <span  className="mx-3">Rest API</span>
    <span  className="mx-3">TypeScript</span>
    <span  className="mx-3">AngularJs</span>
    <span  className="mx-3">ExpressJs</span>
    <span  className="mx-3">REACT</span>
    <span  className="mx-3">Rest API</span>
    <span  className="mx-3">TypeScript</span>
    <span  className="mx-3">AngularJs</span>
    <span  className="mx-3">ExpressJs</span>
  </marquee>
    </div>
    </div>
     <div className={open?"navbare":"navbare acti"}>
    
  
  
     <div className="myid border-right fixed overflow-y-auto h-screen" id='myid'>
     <div className="shadow-xl bg-white sticky top-0 h-30 py-3 px-6" id="divid">
      
     <div className=' flex border rounded-md w-50 items-center py-1 '  >
  <FontAwesomeIcon icon={faSearch} className='text-gray-400 px-2'/>
      <input type="text" placeholder='recherche...' className='border-none rounded-md outline-none w-32' />
      <p className='text-gray-400 text-sm px-2'>ctrl k</p>
      </div>
      </div>
    <div className="flex  justify-between px-3 py-3 items-center" id="div">
     <p className="font-bold">Apprendre <span className="text-blue-400">CSS</span></p>
        <FontAwesomeIcon icon={faClose} className="text-end" onClick={closebouton}/>
    </div>
      <div className='text-gray mb-20'>
        <ul className="px-3">
         <h3 className="font-bold">JavaScript Propriete:</h3>
          
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Window</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Document</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link to="/somme/html" className="ms-6" onClick={closebouton}>variable</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>constante</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>let keywords</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>addEventListener</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>ClassList</Link>
          </li>
          <li className=" font-small">
            <Link className="ms-6" onClick={closebouton}>add</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>remove</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>contains</Link>
          </li>
          <hr />
        
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6">DOM</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Array</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Object</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Conditional</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link to="/contact" className="ms-6" onClick={closebouton}>Spread Operator</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Array detructuring</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Prepend</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>append</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>insertBefore</Link>
          </li>
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>NextElementSiblings</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>PreviousElementSiblings</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link to="/contact" className="ms-6">Function</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">Arrow Function</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">CallBack function</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">Logic && Operator</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">Class keywords</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">Method de l'array</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">Exemple</Link>
          </li>
          <hr />
        </ul>
      </div>
      </div>
     </div>
     
     
     </>
    )
}

export default NavbarJs
