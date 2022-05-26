import React from 'react'
import Image from 'next/image'
import logo from '../public/ece logo.jpg'
import Link from 'next/link'
function Navbar({ wid, name, href, text }) {
  return (
    <div>
      <nav className='bg-lime-500 h-fit  flex justify-between' style={{ minWidth: wid }}>
        <div className='ml-2 pt-1'><Link href={"https://rkmgecece.netlify.app/"}><a><Image src={logo} height={70} width={70} alt='logo' className='rounded-xl '/></a></Link>
        </div>
        {name?<div className='text-white text-4xl sm:text-2xl pr-8 pt-4 '>{name}</div>:<div className='text-white text-4xl sm:text-2xl pr-8 pt-4 cursor-pointer'><Link href={href}><a><button>{text}</button></a></Link></div>}
        
        
      </nav>
    </div>
  )
}

export default Navbar