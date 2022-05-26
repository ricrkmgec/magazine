import React from 'react'

function Footer({wid}) {
  return (
    <div className='bg-yellow-200 flex flex-col place-content-center ' style={{minWidth:wid}} >
    <div className='bg-yellow-200 text-red-500 flex place-content-center h-20 pt-6 text-xl sm:text-2xl' style={{minWidth:wid}}>
       @2022 Designed by Subhabrata Majee
    </div>
    <div className='place-content-center mx-auto pb-6 text-lime-400' >For any technical Issuue ,contact : +91 629738213</div>
     </div>
  )
}

export default Footer