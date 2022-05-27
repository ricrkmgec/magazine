import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.jpg'
function Footer({wid}) {
  return (
    <div className='bg-yellow-200 flex flex-col place-content-center ' style={{minWidth:wid}} >

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     
      <Image className='rounded-full' src={logo} height={50} width={50} alt='LOGO'/>
      <span className="ml-3 text-xl">ECE</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Designed by  —
      <a href="" className="text-gray-600 font-semibold text-xl ml-1" rel="noopener noreferrer" >@Subhabrata Majee</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     Any Techincal issue Contact: +916297385213
    </span>
  </div>
</footer>









     </div>
  )
}

export default Footer