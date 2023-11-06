import React from 'react'
import Header from '../layahouts/Header'
import NavbarHtml from '../layahouts/NavbarHtml'
import { CodeBlock, dracula,CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {faCss3,faHtml5,faJs} from "@fortawesome/free-brands-svg-icons"

function Html() {
  const CodeHtml=`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
     content="width=device-width,
      initial-scale=1.0">
    <title>premier pas en html</title>
</head>
<body>
<div>
<h1>je suis le h1 tag</h1>
<h2>je suis le h2 tag</h2>
<h3>je suis le h3 tag</h3>
<h4>je suis le h4 tag</h4>
<h5>je suis le h5 tag</h5>
<p>voici mon code HTML</p>
</div> 
</body>
</html>
 `;
  const myp =`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
       content="width=device-width,
        initial-scale=1.0">
      <title>mon site</title>
  </head>
  <body>
  <div>
  <p>je suis le balise paragraph p</p>
  <p>on verra des exemples precis </p>
  </div>
  </body>
</html>`

const html=` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
     content="width=device-width,
      initial-scale=1.0">
    <title>mon site</title>
</head>
<body>
</body>
</html>`
const body =`<div>
<h1>je suis le h1 tag</h1>
<h2>je suis le h2 tag</h2>
<h3>je suis le h3 tag</h3>
<h4>je suis le h4 tag</h4>
<h5>je suis le h5 tag</h5>
<p>voici mon code HTML</p>
</div> `

  return (
    <div>
      {/* the contenu on navbar and header */}
      <Header/>
      <div className="flex">
      <div className='w-70 bg-gray-200'>
       <NavbarHtml/>
      </div>
     {/* the contenu of the rest of our screens */}
    <div className='static md:ms-72 mx-2 mt-10 md:me-64 mb-10'>
      <div>
    <h3 className=' font-bold lg:ms-72 text-2xl text-black'>HTML <span className='text-lg'>(HyperText Markup Language)</span></h3>
    <p>Le HTML connu comme le Hyper Text Markup Language est un langage de balisage. Elle nous permet d'ecrire nos differents Title avec la balise (h1 a h5),nous pouvons aussi ecrire nos differents paragraph avec la balise (p) et plus encore,dans les lignes qui suivent nous essayerons de voir plus des exemples precis et plus concret qui vous permettrons de bien commencer.</p>
        <p className='border bg-slate-100 rounded-md text-gray w-60 my-3 p-2 text-sm font-semibold'>Le secret de la programmation c'est la pratique. Par force de pratiquer vous finirez par obtenir ce que vous voulez. <span className='text-blue-400'>......Yahoulbo Felix</span></p>
    </div>
    <div>
        <h2 className='font-bold md:ms-84 my-2  text-2xl text-black'>1)Commencons par ou et comment coder du HTML</h2>
        <p>Pour coder du HTML nous avons besoin d'un environnement,c'est a dire ou coder notre code HTML,vous pouvez cliquer sur ce lien et telecharger du VsCode pour commencer a coder notre HTML <Link to="https://code.visualstudio.com/download" className='text-blue-400 underline'>lien pour VsCode</Link>,apres avoir telecharger VsCode,installer le et commencons par creer notre premier projet.</p>
       <h2 className='font-bold md:ms-84 my-2  text-2xl text-black'>2) Commencons notre premier projet</h2>
       <p>creer un fichier externe avec un nom de votre choix et ouvrer le avec du VsCode,apres essayer de creer notre premier file dans VsCode appeler index.html cliquer ensuite sur la touche <em>ctrl + 1</em> si vous utiliser le clavier QWERTY etcliquer <em>!</em> si vous utiliser le clavier AZERTY ensuite presser sur entrer elle va genere dis lignes des codes suivantes:</p>
       <CodeBlock
      text={html}
      language="html"
      showLineNumbers={true}
      theme={dracula}
    />
     <h2 className='font-bold md:ms-84 my-2  text-2xl text-black'>3) Notre premier pas en HTML essayer d'ecrire ce ligne de code entre le body tag.</h2>
     <CodeBlock
      text={body}
      language="html"
      showLineNumbers={true}
      theme={dracula}
    />
    <p>Le resultat final sera comme ceci</p>
       <div >
         <div>
          <p className='font-bold'>input</p>
          <CodeBlock
      text={CodeHtml}
      language="html"
      showLineNumbers={true}
      theme={dracula}
    />
         </div>
         <div>
          <p className='font-bold'>output</p>
          <div className='border bg-black p-7 text-white'>
          <h1 className='text-3xl font-medium'>je suis le h1 tag</h1>
          <h2 className='text-2xl font-bold'>je suis le h2 tag</h2>
          <h3 className='text-xl font-bold'>je suis le h3 tag</h3>
          <h4 className='text-lg font-bold'>je suis le h4 tag</h4>
          <h5 className='text-md font-medium'>je suis le h5 tag</h5>
          <p>voici mon code HTML</p>
          </div>
         </div>
       </div>
       
       
    </div>
    <div>
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>3) Voici un exemple de code HTML</h2>
    <p>La balise P est une balise qui nous permet d'ecrire nos differents text,par exemple ce text que vous lisez 
      a ete ecrit dans la balise p,ne vous inquieter nous allons voir plus lorsque nous allons  entamer cahaque balise nous y verrons plus.</p>
    </div>

    <div className='my-2'>
   <div>
   <p className='font-bold'>input</p>
   <CodeBlock
      text={myp}
      language="html"
      showLineNumbers={true}
      theme={dracula}
    />
   </div>
   <div>
   <p className='font-bold'>output</p>
   <div className='border bg-black p-7 text-white'>
   <p>je suis le balise paragraph p</p>
  <p>on verra des exemples precis </p>
    
    </div>
   
   </div>
    </div>
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>4) Continuer la lecon selon votre choix</h2>
    Ceci est un exemple de l'utilisation de differentes balises HTML,rester jusqu'a la fin et je pense vous apprecierez les lecon a venir.
    Arriver au terme de la premiere partie voici,nous allons attaquer sur chaque balise et essayer de comprendre leur differents,Bye au prochain tutoriels.
    <div className='flex justify-end mx-2 mt-10'>
      <button className=' rounded-md p-2  text-white font-medium bg-slate-700'>au suivant</button>
    </div>
    </div>
   

    {/* the right contain of the screen*/}
    <div className=" md:flex justify-end items-start mx-2" id='contenu'>
      <button className='md:fixed  border bg-white shadow-2xl  w-64 h-96 mt-2  rounded-md p-2 '>
        <FontAwesomeIcon icon={faClose} className='absolute right-4 top-3'/>
        <button className='absolute left-2 top-2 bg-gray-400 px-12 text-white'>Google Ads</button>
        <h2 className='font-extrabold'>FrontEnd</h2>
        <p>Developper votre connaissance dans la programmation</p>
       <div className='mt-6'>
       <FontAwesomeIcon icon={faCss3} className='text-3xl mx-3 text-orange-600'/>
        <FontAwesomeIcon icon={faHtml5} className='text-3xl mx-3 text-orange-800'/>
        <FontAwesomeIcon icon={faJs} className='text-3xl mx-3 text-yellow-400'/>
       </div>
       <p>Valider votre part et avoir du travail dans le monde du web grace a ces trois languages.</p>
       <p className='font-bold text-blue-400'>Cliquer ici pour avoir plus de conseil</p>
      </button>
    </div>
    </div>
  
    </div>
  )
}

export default Html
