import {Link} from "react-router-dom"
import Header from "./layahouts/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import "./accueil.css"



function Accueil (){
    return(
       <>
       <Header/>
      <div id="marquee" className="bg-slate-700 flex">
        <h3 className="font-bold px-2">Apprendre</h3>
      <marquee behavior="slow" direction="" >
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
       <div className="text-center pt-16 bg-slate-700 py-72 md:py-40">
       <h3 className="text-5xl font-sans font-extrabold text-white md:text-7xl"> Apprendre a coder</h3>
       <h3 className="text-center font-extrabold text-xl pt-10 text-yellow-500 mx-4">Vivez vos passion et vos reves dans le developpement web.</h3>
      <div className="flex justify-center px-2">
      <div className=' flex border rounded-md w-52 bg-white justify-between items-center py-1 my-6 '  >
    <input type="text" placeholder='recherche...' className='border-none rounded-md outline-none w-44 px-3' />
    <FontAwesomeIcon icon={faSearch} className='text-gray-400 px-2 text-lg'/>
    </div>
      </div>
      <h3 className="underline text-xl font-bold text-gray-200"><Link to="/somme">Vous savez pas ou commencer?</Link></h3>
       </div>

<h3 className="p-4 w-64  bg-green-200 -z-10 -mt-24" id="myborder"></h3>
       <div className="pt-16 bg-green-200 text-center pb-6">
       <h3 className="text-5xl font-extrabold">HTML</h3>
       <h3 className="text-lg font-bold text-gray-600 my-3">Le language pour creer des sites</h3>
      <div className="orimadji">
     <div>
     <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-6 rounded-2xl my-2"><Link to="/somme/html">Apprendre HTML</Link></button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-7 rounded-2xl my-2">HTML Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
     </div>
      </div>
       </div>
       <div className="pt-16 bg-yellow-200 text-center pb-6">
       <h3 className="text-5xl font-extrabold">CSS3</h3>
       <h3 className="text-lg font-bold text-gray-800 my-3">Language pour styliser les sites web</h3>
      <div className="orimadji">
    <div>
    <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-7 rounded-2xl my-2"><Link to="/somme/css">Apprendre CSS3</Link></button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-8 rounded-2xl my-2">CSS3 Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
    </div>
      </div>
       </div>
       <div className="pt-16 bg-gray-950 text-center text-white pb-6">
       <h3 className="text-5xl font-extrabold"> JavaScript</h3>
       <h3 className="text-lg font-bold text-gray-200 my-3">Le language pour programmer les sites web</h3>
       <div className="orimadji">
       
       <div>
       <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-4 rounded-2xl my-2">Apprendre JavaScript</button>
       <button className=" bg-white mx-4 text-black font-bold text-xl py-2 px-5 rounded-2xl my-2">JavaScript Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-5 rounded-2xl">Obtenir un Certificat</button>
      
        </div>
        
         </div>
       </div>
       <div className="pt-16 bg-gray-100 text-center pb-6">
       <h3 className="text-5xl font-extrabold">Python</h3>
       <h3 className="text-lg font-bold text-gray-800 my-3">Le plus populaire language de programmation</h3>
       <div className="orimadji">
      <div>
      <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-8 rounded-2xl my-2">Apprendre Python</button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-9 rounded-2xl my-2">Python Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-5 rounded-2xl">Obtenir un Certificat</button>
      </div>
       </div>
       </div>
       <div className="pt-16 bg-yellow-200 text-center pb-6">
       <h3 className="text-5xl font-extrabold">C++</h3>
       <h3 className="text-lg font-bold text-gray-800 my-3">Language de Programmation</h3>
      <div className="orimadji">
    <div>
    <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-8 rounded-2xl my-2">Apprendre C++</button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-9 rounded-2xl my-2">C++ Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
    </div>
      </div>
       </div>

       <div className="pt-16 bg-gray-100 text-center pb-6">
       <h3 className="text-5xl font-extrabold">Java</h3>
       <h3 className="text-lg font-bold text-gray-800 my-3">Language de programmation</h3>
      <div className="orimadji">
    <div>
    <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-7 rounded-2xl my-2">Apprendre Java</button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-8 rounded-2xl my-2">Java Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
    </div>
      </div>
       </div>
       <div className="pt-16 bg-green-300 text-center pb-16">
       <h3 className="text-3xl text-white font-extrabold">React</h3>
       </div>
       <div className="pt-16 bg-sky-400 text-center pb-16">
       <h3 className="text-3xl font-extrabold">Angular</h3>
       </div>
       <div className="pt-16 bg-slate-700 text-center pb-16">
       <h3 className="text-3xl text-white font-extrabold">TypeScript</h3>
       </div>
       <div className="pt-16 bg-red-300 text-center pb-16">
       <h3 className="text-3xl font-extrabold">MongoDb</h3>
       </div>
       <div className="pt-16 bg-black text-center pb-16">
       <h3 className="text-3xl text-white font-extrabold">MySql</h3>
       </div>
       <div className="pt-16 bg-yellow-300 text-center pb-16">
       <h3 className="text-3xl font-extrabold">ExpressJs</h3>
       </div>
       <div className="pt-16 bg-gray-100 text-center pb-16">
       <h3 className="text-3xl font-extrabold">Data Analysis</h3>
       </div>
       <div className="pt-16 bg-green-300 text-center pb-16">
       <h3 className="text-3xl font-extrabold">Github</h3>
       </div>
        
        </>
    )
}
export default Accueil