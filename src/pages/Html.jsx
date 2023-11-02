import React from 'react'

function Html() {
  return (
    <div>
    <div>
    <h3 className=' font-bold md:ms-72 text-2xl text-black'>HTML <span className='text-lg'>(HyperText Markup Language)</span></h3>
    <p>HTML known as the hypertext markup language is the language of tag,is used to write the title like:(h1),paragraph like(p) and ancretag(a) for our website
        and so one,most of the website use HTML to structured their website . In the bellow page we go see how to use HTML to structure your webpages. </p>
        <p className='border bg-slate-100 rounded-md text-gray w-52 p-2 text-sm font-semibold'>" The secret of learning it's practice,by force to practice you must know it" <span className='text-blue-400'>......Yahoulbo Felix</span></p>
    </div>
    <div>
        <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>1) The Title Tag</h2>
        <p>HTML is Tag language because its used to structured our website,and so one. here it's a some of them lets start by the title tag,we get generally 5 tag for the title</p>
        <ol className='border inline-block p-4 bg-black text-white'>
            <li className='font-medium'>h1 <span className='mx-3 font-serif text-sm'>the important tag</span></li>
            <li className='font-medium'>h2<span  className='mx-3 font-serif text-sm'>the important tag</span></li>
            <li  className='font-medium'>h3<span  className='mx-3 font-serif text-sm'> important tag</span></li>
            <li  className='font-medium'>h4<span  className='mx-3 font-serif text-sm'>less important tag</span></li>
            <li  className='font-medium'>h5<span  className='mx-3 font-serif text-sm'>neant tag</span></li>
        </ol>
    </div>
    <div>
    <h2 className=' font-bold md:ms-84 my-2  text-2xl text-black'>2) The paragraph Tag</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nobis dolorem. Eos quis sit accusantium temporibus delectus voluptatibus modi,
         facere distinctio non? Recusandae in architecto libero repellendus facere natus voluptatum.</p>
    </div>
    </div>
  )
}

export default Html
