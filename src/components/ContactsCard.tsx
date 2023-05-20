import React from 'react'
import ContactsSocial from './ContactsSocial'

export default function ContactsCard() {
  return (
    <div className='w-full sm:w-1/2 mx-8 shadow-md shadow-black flex justify-center px-10 rounded-xl lg:w-2/5 mt-20 h-80 lg:h-96'>
        <div className='flex flex-col items-center'>
            <img 
                src='/images/contactsImg.svg'
                className='w-48 h-48 lg:w-52 lg:h-52 lg:mt-6 mt-3'/>
            <div className='mt-2 lg:mt-5'>
                <ContactsSocial />
            </div>
            <span className='text-xs mt-4'>Copyright ©2023 All rights reserved</span>
        </div>
    </div>
  )
}
