import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut,faSign,faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom"

function Header() {
  return (
    <div className='sticky top-0 bg-white md:p-3 px-2 py-4 shadow-lg'>
     <div className='flex justify-between items-center px-2'>
        <h2 className=' flex items-center font-bold text-lg md:text-3xl opacity-75'>
        <div class="container me-2" >
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
          Web[<span className="text-blue-400 md:text-2xl"> Docs</span></h2>
       
        <div className='font-bold flex'>
           <div className='mx-3 px-4 py-0' id='divide'>
           <Link className='mx-3' id="compo">Docs</Link>
           <Link className='mx-3' id="compo">Component</Link>
           <Link className='md:mx-3 mx-2' to="/blog">Blog</Link>
            <FontAwesomeIcon icon={faSun} className='mx-2 text-blue-400'/>
           </div>
           <Link to="/signin" className="md:mx-3" >Sign In</Link>
            <Link to="/"  className='border-none md:mx-2 p-1 rounded-lg bg-black text-white' id="compo">Get All Access <FontAwesomeIcon icon={faSignOut}/></Link>
        </div>
     </div>
    </div>
  )
}

export default Header
