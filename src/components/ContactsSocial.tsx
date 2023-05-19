import Link from 'next/link'
import React from 'react'

export default function ContactsSocial() {
  return (
    <div className='flex justify-center'>
        <Link href="#" className='transitionReScale'>
            <img 
                src='/images/facebook_color_icon.svg'
                className='w-9 h-9'/>
        </Link>
        <Link href="#" className='mx-4 transitionReScale'>
            <img 
                src='/images/twitter_color_icon.svg'
                className='w-9 h-9'/>
        </Link>
        <Link href="#" className='mr-4 transitionReScale'>
            <img 
                src='/images/instagram_color_icon.svg'
                className='w-9 h-9'/>
        </Link>
        <Link href="#" className='transitionReScale'>
            <img 
                src='/images/signal_color_icon.svg'
                className='w-9 h-9'/>
        </Link>
    </div>
  )
}
