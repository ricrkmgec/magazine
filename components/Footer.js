import React from 'react'

function Footer({wid}) {
  return (
    <div className='bg-yellow-200 text-red-500 flex place-content-center h-20 pt-6 text-xl sm:text-2xl' style={{minWidth:wid}}>
       @2022 Designed by Subhabrata Majee
    </div>
  )
}

export default Footer