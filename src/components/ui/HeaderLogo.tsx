import Link from 'next/link'
import React from 'react'

export default function HeaderLogo () {
  return (
    <div className='flex justify-start ml-44 group'>
        <div style={{zIndex: 1}} className='w-48 absolute top-0 bg-primary-dark h-2 group-hover:bg-primary-semi'></div>
        <Link href="/">
          <div className='mt-8 mb-10'>
            <img 
                src='./images/logo.svg'
                width="200dp"
                height="100dp"
                className='group-hover:scale-110 transition-transform duration-300 ease-in-out'/>
          </div>
        </Link>
    </div>
  )
}
