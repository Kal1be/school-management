import React from 'react'
import img from "../img/webdocs icon.png"

function Footer() {
  return (
    <div className='bg-slate-800 p-4 text-white'>
        <div className='md:flex justify-around'>
        <div>
        <h2 className='text-white flex items-center md:font-bold font-bold text-md md:text-xl' id="icontitle">
        <img src={img} alt="" className="md:w-6 -mt-3 md:me-2 w-7 me-1 "/>
          Web[<span className="text-yellow-600 md:text-xl"> Docs</span></h2> 
          <div><p className='w-72 text-sm font-normal my-3 text-gray-400'>WebDocs est une plateforme d'apprentissage en ligne utiliser par plus de 2000 etudiants autour du monde,apprendre et connaitre est notre priorite.</p></div>
        </div>
        <div className='my-3 md:my-0'>
            <h2 className='font-extrabold'>Listes de nos Cours</h2>
            <div>
                <ul className='text-sm font-normal text-gray-400'>
                    <li>- Apprendre HTML</li>
                    <li>- Apprendre CSS3</li>
                    <li>- Apprendre JavaScript</li>
                    <li>- Apprendre Python</li>
                    <li>- Apprendre Java</li>
                    <li>- Apprendre C++</li>
                </ul>
            </div>
        </div>
        <div className='my-3 md:my-0'> 
        <h2 className='font-extrabold'>Differents Blog</h2>
        <ul  className='text-sm font-normal text-gray-400'>
            <li>- Lire les Commentaires</li>
            <li>- Avoir de l'aide</li>
            <li>- Demander plus de conseil</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
        <div>
        <h2 className='font-extrabold'>Documentation</h2>
        <div>
            <ul  className='text-sm font-normal text-gray-400'>
                <li>- Lire la documentaion du HTML</li>
                <li>- Lire la documentaion du CSS</li>
                <li>- Lire la documentaion du JavaScript</li>
                <li>- Lire la documentaion du Python</li>
                <li>- Lire la documentaion du Java</li>
                <li>- Lire la documentaion du C++</li>
            </ul>
        </div>
        </div>

        </div>
      <div className='text-center mt-10 text-sm text-gray-400 font-normal mx-10'> <small>Copyright &copy; 2023,Developper par DevSoftware Company Distributed </small></div>
    </div>
  )
}

export default Footer
