import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut,faSign,faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"

function Header() {
  return (
    <div className='sticky top-0 bg-white p-3 shadow-lg'>
     <div className='flex justify-between items-center px-2'>
        <h2 className='font-bold text-2xl text-blue-400 decoration-underline'>Web Docs</h2>
       
        <div className='font-semibold flex'>
           <div className='mx-3 px-4 py-0' id='divide'>
           <Link className='mx-3'>Docs</Link>
           <Link className='mx-3'>Component</Link>
           <Link className='mx-3' to="/blog">Blog</Link>
            <FontAwesomeIcon icon={faSun} className='mx-2 text-blue-400'/>
           </div>
           <Link to="/signin" className="mx-3">Sign In</Link>
            <Link to="/"  className='border-none md:mx-2 p-1 rounded-lg bg-black text-white'>Get All Access <FontAwesomeIcon icon={faSignOut}/></Link>
        </div>
     </div>
    </div>
  )
}

export default Header
