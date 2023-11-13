import React from 'react'
import img1 from "../assets/devsoftware.jpg"
import img2 from "../assets/batha.jpg"
import img3 from'../assets/nathaniel.jpg'
import Header from '../layahouts/Header'
import Navbar from '../layahouts/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Footer from '../layahouts/Footer'

function Blog() {
  return (
   
       <div>
      <Header/>
      <div className="md:flex">
      <div className='w-70 bg-gray-200'>
        <Navbar/>
      </div>
      <div className='static md:ms-72 block mt-10'>
      <h2 className='md:text-3xl mx-3 text-2xl font-serif font-bold py-2  text-center'>Ensemble Changeons le monde du web</h2>
    <div className='md:flex justify-around'>
    <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-xl'>
    <p>En tant que CoFoundateur du projet WebDocs,Kalibe est un developpeur,Programmeur et specialiste du Web,ce plateforme a ete creer pour aider nos etudiants a connaitre les technologies et comment les utiliser et les implementer dans leurs differents projets,nous sommes ravi de vous aider a grimper votre niveau dans le developpement web.</p>
    <div className='flex items-center'> <img src={img1} alt="" className='w-8 rounded-full'/><span className='text-yellow-500 mx-2 italic'><strong>Kalibe Felix Yahoulbo<small className='block text-sm font-normal text-gray-500'>Co-Foundateur</small></strong></span></div>
     </div>
     <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-xl'>
      <p>Salut,Nathaniel je suis Data Analyst Foundateur du projet WebDocs,nous faisons nos meilleures pour vous offrir une meilleurs interfaces utilisateurs,je serai ravi de repondre a plusieurs de vos question a propos de vos differents question qui seront la bienvenue et nous permettra d'ameliorer l'experience d'utilisateur.</p>
    <div className='flex items-center'> <img src={img3} alt="" className='w-8 rounded-full'/><span className='text-yellow-500 mx-2 italic'><strong>Namo Nathaniel <small className='block text-sm font-normal text-gray-500'>Foundateur</small></strong></span></div>
     </div>
     <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-lg'>
      <p>Hello friend i'm mister Bata,Director of the project WebDocs,leave free your self to send us a feedback,it's will allow us to change and offer you the good user interface and allowed you buid your carreer in the web developpment,here we think that we are so excited to read our course et practice as well as possible.</p>
    <div className='flex items-center'> <img src={img2} alt="" className='w-8 rounded-full'/><span className='text-yellow-500 mx-2 italic'><strong>Zoaka Bata Boukar<small className='block text-sm font-normal text-gray-500'>Director</small></strong></span></div>
    
     </div>
    
     </div>
     <div>
      <h2 className='md:text-3xl mx-3 text-2xl font-serif font-bold py-2 text-center'>Ce que nos etudiants disent a propos de nous?</h2>
      <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-lg'>
      <p>Hello friend i'm mister Haruna,Director of the project WebDocs,leave free your self to send us a feedback,it's will allow us to change and offer you the good user interface and allowed you buid your carreer in the web developpment,here we think that we are so excited to read our course et practice as well as possible.</p>
    
     </div>
     </div>
     <h2 className='md:text-3xl mx-3 text-2xl font-serif font-bold py-2 text-center'>Nous ecrire et donner votre avis a propos de Webdocs</h2>
     <p className='mx-3'>Sentez vous libre de nous poser des questions concernant les programmes,et les ameliorations et vos differents besoin seront mis a jour pour permettre de vous offrir la meilleurs experiences et d'interactivite.</p>
     <form className=' md:px-10 px-4 py-6 md:mx-16 mx-2 my-6 rounded-xl shadow-2xl'>
      <div className='md:flex justify-around my-2'>
      <div className='my-3'>
        <label htmlFor="username" className='font-bold my-3'>Nom et Prenom</label>
        <input type="text" className='border w-full md:px-10 px-2 py-2 rounded-xl outline-none' placeholder='entrer votre nom' />
      </div>
      <div className='my-3'>
      <label htmlFor="email" className='font-bold my-3'>Email</label>
        <input type="text" className='border w-full md:px-10 px-2 py-2 rounded-xl outline-none' placeholder='entrer votre email' />
      </div>
      </div>
      <div className='md:mx-12 my-3'>
      <label htmlFor="email" className='font-bold my-3'>Entrer votre message</label>
      <textarea name="" id="" cols="30" rows="10" placeholder='enter votre message ici ...' className='border w-full p-3 outline-none rounded-xl'></textarea>
    
      </div>
     <div className='md:mx-12 my-3'>
     <button type='submit' className=' border w-full p-3 outline-none rounded-xl text-center text-yellow-500'>Envoyer <FontAwesomeIcon icon={faPaperPlane}/></button>
    </div> 
    </form>
    <Footer/>
    </div>
    </div>
    </div>
  )
}

export default Blog
