import React from 'react'
import Image from 'next/image'
import logo from '../public/ece logo.jpg'
function Navbar({wid,name}) {
  return (
    <div>
        <nav className='bg-lime-500 h-fit  flex justify-between' style={{minWidth:wid}}>
<div className='ml-2 pt-1'>
<Image src={logo} height={70} width={70} alt='logo' className='rounded-xl '/>
</div>
<div className='text-white text-4xl sm:text-2xl pr-8 pt-4'>{name}</div>
        </nav>
    </div>
  )
}

export default Navbar