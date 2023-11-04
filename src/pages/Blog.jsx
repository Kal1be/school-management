import React from 'react'
import img1 from "../assets/img 4.jpg"
import img2 from "../assets/felix1.jpg"
import Header from '../layahouts/Header'
import Navbar from '../layahouts/Navbar'

function Blog() {
  return (
   
       <div>
      <Header/>
      <div className="md:flex">
      <div className='w-70 bg-gray-200'>
        <Navbar/>
      </div>
      <div className='static md:ms-72 block mt-10'>
      <h2 className='md:text-2xl ms-6 text-xl font-serif font-bold py-2 md:ms-72'>Ensemble changeons le monde du web.Croyons</h2>
    <div className='md:flex justify-around'>
    <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-xl'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore tempora aliquam voluptatem voluptas. Nihil, rerum doloribus illo explicabo minus tempora magnam iste nisi repudiandae incidunt fugit odio nostrum vero quibusdam reprehenderit soluta labore consequuntur aperiam sunt natus. Quaerat, aspernatur, quo vel modi nemo doloremque quisquam quibusdam ipsa dolore blanditiis dolorum iste eum quod, illo recusandae! Nesciunt molestias sit amet.</p>
    <div className='flex items-center'> <img src={img1} alt="" className='w-8 rounded-full'/><span className='text-blue-500 mx-2 italic'><strong>Kalibe Felix <span className='block text-sm text-gray-500'>Cofondateur</span></strong></span></div>
     </div>
     <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-xl'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore tempora aliquam voluptatem voluptas. Nihil, rerum doloribus illo explicabo minus tempora magnam iste nisi repudiandae incidunt fugit odio nostrum vero quibusdam reprehenderit soluta labore consequuntur aperiam sunt natus. Quaerat, aspernatur, quo vel modi nemo doloremque quisquam quibusdam ipsa dolore blanditiis dolorum iste eum quod, illo recusandae! Nesciunt molestias sit amet.</p>
    <div className='flex items-center'> <img src={img2} alt="" className='w-8 rounded-full'/><span className='text-blue-500 mx-2 italic'><strong>Bianpambe Marcelin<span className='block text-sm text-gray-500'>Assistant</span></strong></span></div>
     </div>
     <div className='border inline-block md:w-72 p-4 bg-white mx-3 my-2 shadow-lg'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore tempora aliquam voluptatem voluptas. Nihil, rerum doloribus illo explicabo minus tempora magnam iste nisi repudiandae incidunt fugit odio nostrum vero quibusdam reprehenderit soluta labore consequuntur aperiam sunt natus. Quaerat, aspernatur, quo vel modi nemo doloremque quisquam quibusdam ipsa dolore blanditiis dolorum iste eum quod, illo recusandae! Nesciunt molestias sit amet.</p>
    <div className='flex items-center'> <img src={img1} alt="" className='w-8 rounded-full'/><span className='text-blue-500 mx-2 italic'><strong>Ephraim Haruna<span className='block text-sm text-gray-500'>Director</span></strong></span></div>
     </div>
    </div>
    <p className='mx-3 text-justify'>just use free of my time to build this for our new developper to help them to master and become a fullstack developper one day</p>
    <p className='mx-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur temporibus et corporis explicabo nam eligendi ea, ex atque nisi vero. Culpa earum reiciendis sequi similique officiis! Repellendus quos possimus nemo excepturi hic autem voluptate! Suscipit deserunt culpa, corrupti fugiat maiores ea officia nulla numquam voluptas autem et? Voluptates, iste animi at accusamus aliquam voluptatibus, ipsa dolorem repellendus inventore, nihil delectus explicabo reprehenderit facilis libero quos. Laborum, nisi mollitia! Hic eum delectus, facere maiores enim asperiores ea est alias accusantium, eveniet vero ducimus quam magnam ipsa maxime quibusdam dolorum illo? Nam eligendi et necessitatibus commodi in facere. Repellat odit dolor itaque.</p>
    </div>
    </div>
    </div>
  )
}

export default Blog
