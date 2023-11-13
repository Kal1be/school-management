import {Link} from "react-router-dom"
import Header from "./layahouts/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase, faSearch, faSquare, faTextHeight, faTextSlash } from "@fortawesome/free-solid-svg-icons"
import {faFacebookF,faReact,faJs,faCss3,faAlgolia,faNodeJs,faMdb,faSquareGithub,faGithub, faTwitch, faBootstrap, faTypo3, faPadlet, faWatchmanMonitoring, faPython, faAngular, faVuejs, faFigma} from "@fortawesome/free-brands-svg-icons"
import { CodeBlock,dracula } from "react-code-blocks"
import "./accueil.css"
import Footer from "./layahouts/Footer"



function Accueil (){
  const html=`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,
        initial-scale=1.0">
  <title>mon site</title>
  </head>
  <body>
  </body>
</html>`
const css=`div{
  color:blue;
  margin:2px 4px;
  padding:10px;
  position :absolute;
  top:0;
  animation: contain .2s all linear infinite;
}
@keyframes contain{
0%{left:0}
90%{left:90%}
100%{left:0}
}
`
const javascript =`
const contain=document.getElementById("container")
let toggleNav=document.querySelector(".toggle")
const toggle=()=>{
  toggleNav.classList.toggle(".active")
}
container.addEventListener("click",toggle)


`
    return(
       <>
       <Header/>
      <div id="marquee" className="bg-slate-800 flex">
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
       <div className="text-center pt-16 bg-slate-800 py-72 md:py-40">
       <h3 className="text-5xl font-sans font-extrabold text-white md:text-7xl"> Apprendre a coder</h3>
       <h3 className="text-center font-extrabold text-xl pt-10 text-yellow-600 mx-4">Vivez vos passion et vos reves dans le developpement web.</h3>
      <div className="flex justify-center px-2">
      <div className=' flex border rounded-md w-52 bg-slate-800 justify-between items-center py-1 my-6 '  >
    <input type="text" placeholder='Search...' className='border-none rounded-md outline-none w-44 px-3 font-medium text-lg bg-slate-800 text-white' />
    <FontAwesomeIcon icon={faSearch} className='text-gray-200 px-2 text-lg font-medium'/>
    </div>
      </div>
      <h3 className="underline text-xl font-bold text-gray-200"><Link to="/somme">Vous savez pas ou commencer?</Link></h3>
       </div>
{/*++++++++++++++++++++==================== the part of html for my students=========================+++++++++++++++++++++++++ */}
<h3 className="p-4 w-64  bg-green-200 -z-10 -mt-24" id="myborder"></h3>
       <div className="md:flex justify-center pt-16 bg-green-200 text-center pb-6">
      <div className="md:mx-10">
      <h3 className="text-5xl md:text-6xl font-extrabold">HTML</h3>
       <h3 className="text-lg font-bold text-gray-600 my-3">Le language pour creer des sites</h3>
      <div className="orimadji">
     <div>
     <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-6 rounded-2xl my-2"><Link to="/somme/html">Apprendre HTML</Link></button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-7 rounded-2xl my-2">HTML Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
     </div>
      </div>
      </div>
      <div  className="text-start mx-4 md:mx-2 my-4 md:my-0">
        <CodeBlock text={html}
       

language='html'
showLineNumbers={true}
theme={dracula}/>
      </div>
       </div>

       {/*++++++++++++++=================== the part of de css3 model =======================+++++++++++++++++++*/}
       <div className="md:flex pt-16 justify-center bg-yellow-200 text-center pb-6">
      <div className="md:mx-10">
      <h3 className="text-5xl md:text-6xl font-extrabold">CSS3</h3>
       <h3 className="text-lg font-bold text-gray-800 my-3">Language pour styliser les sites web</h3>
      <div className="orimadji">
    <div>
    <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-7 rounded-2xl my-2"><Link to="/somme/css">Apprendre CSS3</Link></button>
       <button className=" bg-black mx-4 text-white font-bold text-xl py-2 px-8 rounded-2xl my-2">CSS3 Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-2 rounded-2xl">Obtenir un Certificat</button>
    </div>
      </div>
      </div>
      <div className="text-start my-4 md:my-0 mx-4 md:mx-2">
      <CodeBlock text={css}
       

       language='css'
       showLineNumbers={true}
       theme={dracula}/>
      </div>
       </div>
       {/* =+++++++++++++++++++++++++======================the part of javascript for my students=========================+++++++++++++++++++++++ */}
       <div className="md:flex justify-center pt-16 bg-gray-950 text-center text-white pb-6">
      <div className="md:mx-6">
      <h3 className="md:text-5xl text-5xl font-extrabold"> JavaScript</h3>
       <h3 className="text-lg font-bold text-gray-200 my-3">Le language pour programmer les sites web</h3>
       <div className="orimadji">
       
       <div>
       <button className=" bg-blue-400 mx-4 text-white font-bold text-xl py-2 px-4 rounded-2xl my-2"><Link to="/somme/javascript">Apprendre JavaScript</Link></button>
       <button className=" bg-white mx-4 text-black font-bold text-xl py-2 px-5 rounded-2xl my-2">JavaScript Reference</button>
       <button className=" bg-red-400 mx-4 text-white font-bold text-xl py-2 px-5 rounded-2xl">Obtenir un Certificat</button>
      
        </div>
        
         </div>
      </div>
      <div className="text-start my-4 md:my-0 mx-4 md:mx-2">
      <CodeBlock text={javascript}
       

       language='js'
       showLineNumbers={true}
       theme={dracula}/>
      </div>
       </div>

       {/* +++++++++++++++++==================the python for my user students==============================++++++++++++++++++++++++++ */}

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
      <div className="md:flex bg-slate-800 md:py-4 overflow-hidden ">
         {/* +++++++++++++++++++++++++++=======================================the c++ for my students===================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-yellow-200 text-center pb-6 w-screen md:mx-3">
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
{/* +++++++++++++++++++++++++++++++===============================the java for my students====================+++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-gray-100 text-center pb-6 w-screen md:mx-3">
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

      </div>

       {/* ++++++++++++++++++++=============================the start of first==================+++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="md:flex justify-between md:px-6 md:py-6 bg-slate-800">
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-white text-center pb-16 md:w-screen">
        <FontAwesomeIcon icon={faReact} className="text-6xl text-sky-500"/>
       <h3 className="text-3xl text-sky-500 font-extrabold">ReactJs</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-sky-400 text-center pb-16 md:w-screen md:mx-3 ">
        <FontAwesomeIcon icon={faAngular} className="text-6xl text-yellow-400"/>
       <h3 className="text-3xl font-extrabold text-yellow-400">AngularJs</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-white text-center pb-16 md:w-screen">
        <FontAwesomeIcon icon={faTextSlash} className="text-6xl text-slate-800"/>
       <h3 className="text-3xl text-slate-800 font-extrabold">TypeScript</h3>
       </div>
      </div>

{/* +++++++++++++++++++++++===================the tab of second element+==================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="md:flex justify-between md:px-6 md:py-6 bg-slate-800">
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-black text-center pb-16 md:w-screen">
        <FontAwesomeIcon icon={faVuejs} className="text-6xl text-green-400"/>
       <h3 className="text-3xl text-white font-extrabold">VueJs</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
         <div className="pt-16 bg-green-300 text-center pb-16 md:w-screen">
        <FontAwesomeIcon icon={faFigma} className="text-6xl text-slate-800"/>
       <h3 className="text-3xl text-slate-800 font-extrabold">Figma</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-blue-900 text-center pb-16 md:w-screen md:mx-3 ">
        <FontAwesomeIcon icon={faBootstrap} className="text-6xl text-white"/>
       <h3 className="text-3xl font-extrabold text-white">Bootstrap</h3>
       </div>
       
      </div>
      {/* ===============+++++++++++++++++++the end of it=+++++++++++++++++++++++++================================================================ */}



{/* ++++++++++++++++++++==========================tjhe start of the tree of the elememt================+++++++++++++++++++++++++++++++++++++++++++++++ */}
       <div className="md:flex justify-between md:px-6  md:py-6 bg-slate-800">
          {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-red-300 text-center pb-16 md:w-screen">
        
       <FontAwesomeIcon icon={faMdb} className="text-6xl text-white"/>
       <h3 className="text-3xl font-extrabold">MongoDb</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-black text-center pb-16 md:w-screen md:mx-3">
        
       <FontAwesomeIcon icon={faDatabase} className="text-6xl text-yellow-500"/>
       <h3 className="text-3xl text-white font-extrabold">MySql</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-yellow-300 text-center pb-16 md:w-screen">
        <FontAwesomeIcon icon={faNodeJs} className="text-6xl text-white"/>
       <h3 className="text-3xl font-extrabold">ExpressJs</h3>
       </div>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-gray-100 text-center pb-16">
      
       <h3 className="text-3xl font-extrabold">Data Analysis</h3>
       </div>
         {/* ++++++++++++++++++++++++===========================the framework part of my stuidents+=====================++++++++++++++++++++++++++++ */}
       <div className="pt-16 bg-green-300 text-center pb-16">
       <FontAwesomeIcon icon={faGithub} className="text-6xl text-black"/>
       <h3 className="text-3xl font-extrabold">Github</h3>
       </div>
       <Footer/>
        
        </>
    )
}
export default Accueil