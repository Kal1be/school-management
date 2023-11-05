import React from 'react'
import Header from '../layahouts/Header'
import NavbarHtml from '../layahouts/NavbarHtml'
import { CodeBlock, dracula,CopyBlock } from "react-code-blocks";

function Html() {
  const CodeHtml=`<div>
  <h1>je suis le h1 tag</h1>
  <h2>je suis le h2 tag</h2>
  <h3>je suis le h3 tag</h3>
  <h4>je suis le h4 tag</h4>
  <h5>je suis le h5 tag</h5>
  </div>`;
  const myp =`<div>
  <p>je suis le balise paragraph p</p>
  <p>on verra des exemples precis </p>
  </div>`
  return (
    <div>
      <Header/>
      <div className="flex">
      <div className='w-70 bg-gray-200'>
       <NavbarHtml/>
      </div>
     
    <div className='static md:ms-72 mx-4 mt-10 mb-20'>
      <div>
    <h3 className=' font-bold md:ms-72 text-2xl text-black'>HTML <span className='text-lg'>(HyperText Markup Language)</span></h3>
    <p>Le HTML connu comme le Hyper Text Markup Language est un langage de balisage. Elle nous permet d'ecrire nos differents Title avec la balise (h1 a h5),nous pouvons aussi ecrire nos differents paragraph avec la balise (p) et plus encore,dans les lignes qui suivent nous essayerons de voir plus des exemples precis et plus concret qui vous permettrons de bien commencer.</p>
        <p className='border bg-slate-100 rounded-md text-gray w-60 my-3 p-2 text-sm font-semibold'>Le secret de la programmation c'est la pratique. Par force de pratiquer vous finirez par obtenir ce que vous voulez. <span className='text-blue-400'>......Yahoulbo Felix</span></p>
    </div>
    <div>
        <h2 className='font-bold md:ms-84 my-2  text-2xl text-black'>1) Commencons avec un des balises HTML</h2>
        <p>HTML comme nous l'avons definit si haut est un language de balisage,elle nous permet de structurer notre page web en utilisant certain de ces balises pour donner un squelette a nos different pages.</p>
       
       <div className=''>
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
          </div>
         </div>
       </div>
       
       
    </div>
    <div>
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>2) Voici un exemple de code HTML</h2>
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
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>3) Continuer la lecon selon votre choix</h2>
    Ceci est un exemple de l'utilisation de differentes balises HTML,rester jusqu'a la fin et je pense vous apprecierez les lecon a venir.
    </div>
    </div>
    </div>
  )
}

export default Html
