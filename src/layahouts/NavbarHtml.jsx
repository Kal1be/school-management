import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faClose } from '@fortawesome/free-solid-svg-icons'

function NavbarHtml() {
    const [open,setOpen] =useState(true)
    const handleopen=()=>{
      setOpen(!open)
    }
    const closebouton=()=>{
      setOpen(true)
    }
    return (
  
     <>
    <div className="py-1  md:fixed fixed md:top-0 top-10 bg-slate-800 w-screen" id="btn">
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
     <p className="font-bold">Apprendre <span className="text-yellow-500">HTML</span></p>
        <FontAwesomeIcon icon={faClose} className="text-end" onClick={closebouton}/>
    </div>
      <div className='text-gray mb-20'>
        <ul className="px-3">
         <h3 className="font-bold">La balise:</h3>
          
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>a</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>p</Link>
          </li>
          <hr />
         
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>ul</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>ol</Link>
          </li>
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>li</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link to="/somme/html" className="ms-6" onClick={closebouton}>div</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>pre</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>h1 a h5</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>span</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>Strong</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>em</Link>
          </li>
          <li className=" font-small">
            <Link className="ms-6" onClick={closebouton}>marquee</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>head</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>link</Link>
          </li>
          <hr />
        
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6">video</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>img</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>frame</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>iframe</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link to="/contact" className="ms-6" onClick={closebouton}>audio</Link>
          </li>
          <hr />
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>code</Link>
          </li>
          <hr />
         
          <li className=" font-small" onClick={closebouton}>
            <Link className="ms-6" onClick={closebouton}>textarea</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link to="/contact" className="ms-6">script</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">style</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">input</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">label</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">form</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">select</Link>
          </li>
          <hr />
          <li className=" font-small">
            <Link className="ms-6">option</Link>
          </li>
          <hr />
        </ul>
      </div>
      </div>
     </div>
     
     
     </>
    )
}

export default NavbarHtml
