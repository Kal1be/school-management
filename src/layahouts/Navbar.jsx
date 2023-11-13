import { useState } from "react"
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faReact,faJs,faCss3,faAlgolia,faNodeJs,faMdb,faSquareGithub,faGithub, faTwitch, faBootstrap, faTypo3, faPadlet, faWatchmanMonitoring, faPython} from "@fortawesome/free-brands-svg-icons"
import { faSearch,faBookReader, faProjectDiagram, faCodeBranch, faAmericanSignLanguageInterpreting, faSignOut, faGear, faGavel, faCode, faCodeCommit, faIcons, faBarsProgress, faSliders, faBridgeCircleCheck, faM, faClose, } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

function Navbar() {
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
   <p className="font-bold"> Web[ <span className="text-yellow-600">Docs</span></p>
      <FontAwesomeIcon icon={faClose} className="text-end" onClick={closebouton}/>
  </div>
    <div className='text-gray mb-20'>
      <ul className="px-3">
       <h3 className="font-bold">Documentation for:</h3>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faCode} className="text-yellow-600"/>
          <Link to="/somme/html" className="ms-6" onClick={closebouton}>HTML</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faCss3} className="text-yellow-600"/>
          <Link className="ms-6" to="/somme/css" onClick={closebouton}>CSS</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faJs} className="text-yellow-600"/>
          <Link className="ms-6" to="/somme/javascript" onClick={closebouton}>Javascript</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faPython} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Python</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faReact} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Reactjs</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting}className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>REST Api</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGavel}className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Typescript</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faAlgolia} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Angularjs</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faNodeJs} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Expressjs</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faMdb} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>MongoDb</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faM} className="text-yellow-600"/>
          <Link className="ms-6">Mysql</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faBootstrap} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Bootstrap 5</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faTwitch} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Tailwind</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faIcons} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>FontAwesome Icon</Link>
        </li>
        <h3 className="font-bold">How to use:</h3>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faBookReader} className="text-yellow-600"/>
          <Link to="/contact" className="ms-6" onClick={closebouton}>Swiperjs</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faBarsProgress} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>React Sidebar</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faSliders} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>React Slider</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faTypo3} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Typedjs</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faPadlet}className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Particles</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faWatchmanMonitoring} className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Framer-Motion</Link>
        </li>
        <li className=" font-small" onClick={closebouton}>
        <FontAwesomeIcon icon={faBridgeCircleCheck}className="text-yellow-600"/>
          <Link className="ms-6" onClick={closebouton}>Bcryptjs</Link>
        </li>
        <h3 className="font-bold">Hosting On:</h3>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGithub} className="text-yellow-600"/>
          <Link to="/contact" className="ms-6">Github</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faProjectDiagram} className="text-yellow-600"/>
          <Link className="ms-6">Render</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGear} className="text-yellow-600"/>
          <Link className="ms-6">Netlify</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCodeBranch} className="text-yellow-600"/>
          <Link className="ms-6">Heroku</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCodeCommit} className="text-yellow-600"/>
          <Link className="ms-6">Firebase</Link>
        </li>
      </ul>
    <ul className="px-3">
    <li>  <Link className='cursor-pointer font-semibold flex items-center justify-between w-24 hover:text-black'>Sign In<FontAwesomeIcon icon={faSignOut}/></Link></li>
    </ul>
    </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Navbar
