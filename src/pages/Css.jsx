import React from 'react'
import NavbarHtml from '../layahouts/NavbarHtml'
import Header from '../layahouts/Header'

function Css() {
  return (
    <div>
      <Header/>
      <div className="flex">
      <div className='w-70 bg-gray-200'>
       <NavbarHtml/>
      </div>
     
    <div className='static md:ms-72 mx-4 mt-10'>
      <div>
    <h3 className=' font-bold md:ms-72 text-2xl text-black'>CSS<span className='text-lg'>(Cascading Style Sheet)</span></h3>
    <p>CSS est un language de style,elle nous permet de styliser nos differents sites,avec les proprietes CSS comme les color,position bacground et plus encore,nous y verrons tous dans les lignes qui suivent surtout n'oubliez pas pratiquer.</p>
        <p className='border bg-slate-100 rounded-md text-gray w-60 my-3 p-2 text-sm font-semibold'> Seul le travail libere l'homme de sa souffrance,apprendre a coder s'est apprendre a reflechir. <span className='text-blue-400'>......Yahoulbo Raoul Djondang</span></p>
    </div>
    <div>
        <h2 className='font-bold md:ms-84 my-2  text-2xl text-black'>1) La balise pour les Titre</h2>
        <p>HTML comme nous l'avons definit si haut est un language de balisage,elle nous permet de structurer notre page web en utilisant certain de ces balises pour donner un squelette a nos different pages.</p>
        <ol className='border inline-block p-4 bg-black text-white'>
          <li className='font-medium'> h1 <span className='mx-3 font-serif text-sm'>balise plus important</span></li>
            <li className='font-medium'>h2<span  className='mx-3 font-serif text-sm'>balise peu important</span></li>
            <li  className='font-medium'>h3<span  className='mx-3 font-serif text-sm'>balise important</span></li>
            <li  className='font-medium'>h4<span  className='mx-3 font-serif text-sm'>balise moins important</span></li>
            <li  className='font-medium'>h5<span  className='mx-3 font-serif text-sm'>balise neant</span></li>
        </ol>
<code>

</code>
    </div>
    <div>
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>2) La balise paragraph(p)</h2>
    <p>La balise P est une balise qui nous permet d'ecrire nos differents text,par exemple ce text que vous lisez a ete ecrit dans la balise p.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Css
