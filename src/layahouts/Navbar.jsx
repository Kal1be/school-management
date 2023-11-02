import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faReact,faJs,faCss3,faAlgolia,faNodeJs,faMdb,faSquareGithub,faGithub, faTwitch, faBootstrap, faTypo3, faPadlet, faWatchmanMonitoring} from "@fortawesome/free-brands-svg-icons"
import { faSearch,faBookReader, faProjectDiagram, faCodeBranch, faAmericanSignLanguageInterpreting, faSignOut, faGear, faGavel, faCode, faCodeCommit, faIcons, faBarsProgress, faSliders, faBridgeCircleCheck, faM, } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className=" border-right fixed overflow-y-auto h-screen" id='myid'>
   <div className="shadow-xl bg-white sticky top-0 h-30 py-3 px-6" id="divid">
   <div className=' flex border rounded-md w-50 items-center py-1 '>
<FontAwesomeIcon icon={faSearch} className='text-gray-400 px-2'/>
    <input type="text" placeholder='recherche...' className='border-none rounded-md outline-none w-32' />
    <p className='text-gray-400 text-sm px-2'>ctrl k</p>
    </div>
    </div>
    <div className='text-gray mb-20'>
      <ul className="px-3">
       <h3 className="font-bold">Documentation for:</h3>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCode} className="text-blue-400"/>
          <Link to="/html" className="ms-6">HTML</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCss3} className="text-blue-400"/>
          <Link className="ms-6">CSS</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faJs} className="text-blue-400"/>
          <Link className="ms-6">Javascript</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faReact} className="text-blue-400"/>
          <Link className="ms-6">Reactjs</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting}className="text-blue-400"/>
          <Link className="ms-6">REST Api</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGavel}className="text-blue-400"/>
          <Link className="ms-6">Typescript</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faAlgolia} className="text-blue-400"/>
          <Link className="ms-6">Angularjs</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faNodeJs} className="text-blue-400"/>
          <Link className="ms-6">Expressjs</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faMdb} className="text-blue-400"/>
          <Link className="ms-6">MongoDb</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faM} className="text-blue-400"/>
          <Link className="ms-6">Mysql</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faBootstrap} className="text-blue-400"/>
          <Link className="ms-6">Bootstrap 5</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faTwitch} className="text-blue-400"/>
          <Link className="ms-6">Tailwind</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faIcons} className="text-blue-400"/>
          <Link className="ms-6">FontAwesome Icon</Link>
        </li>
        <h3 className="font-bold">How to use:</h3>
        <li className=" font-small">
        <FontAwesomeIcon icon={faBookReader} className="text-blue-400"/>
          <Link to="/contact" className="ms-6">Swiperjs</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faBarsProgress} className="text-blue-400"/>
          <Link className="ms-6">React Sidebar</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faSliders} className="text-blue-400"/>
          <Link className="ms-6">React Slider</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faTypo3} className="text-blue-400"/>
          <Link className="ms-6">Typedjs</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faPadlet}className="text-blue-400"/>
          <Link className="ms-6">Particles</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faWatchmanMonitoring} className="text-blue-400"/>
          <Link className="ms-6">Framer-Motion</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faBridgeCircleCheck}className="text-blue-400"/>
          <Link className="ms-6">Bcryptjs</Link>
        </li>
        <h3 className="font-bold">Hosting On:</h3>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGithub} className="text-blue-400"/>
          <Link to="/contact" className="ms-6">Github</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faProjectDiagram} className="text-blue-400"/>
          <Link className="ms-6">Render</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faGear} className="text-blue-400"/>
          <Link className="ms-6">Netlify</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCodeBranch} className="text-blue-400"/>
          <Link className="ms-6">Heroku</Link>
        </li>
        <li className=" font-small">
        <FontAwesomeIcon icon={faCodeCommit} className="text-blue-400"/>
          <Link className="ms-6">Firebase</Link>
        </li>
      </ul>
    <ul className="px-3">
    <li>  <Link className='cursor-pointer font-semibold flex items-center justify-between w-24 hover:text-black'>Sign In<FontAwesomeIcon icon={faSignOut}/></Link></li>
    </ul>
    </div>

  


      
    </div>
  )
}

export default Navbar
