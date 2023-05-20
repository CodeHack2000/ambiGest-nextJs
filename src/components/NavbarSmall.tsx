'use client'

import React, { useState } from 'react'
import NavbarSmall_Items from '@/ui/NavbarSmall_Items'

import { FC } from 'react'
import Link from 'next/link'
import NavbarSmallSecondMenu from '@/ui/NavbarSmallSecondMenu'

interface NavbarSmallProps {
  isUserLogged: Boolean
}

const NavbarSmall: FC<NavbarSmallProps> = ({isUserLogged}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuIcon, setMenuIcon] = useState(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`)

    const handleMenuClick = () => {
        const navbarSmallItemsContainer = document.querySelector("#navbarSmallItemsContainer")
        if (!isMenuOpen) {
            // Change Navbar Menu Icon
            setMenuIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" /></svg>`)
            // Show Navbar Items
            navbarSmallItemsContainer?.classList.remove("hidden")
            setIsMenuOpen(true)
        } else {
            // Change Navbar Menu Icon
            setMenuIcon(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`)
            // Hide Navbar Items
            navbarSmallItemsContainer?.classList.add("hidden")
            setIsMenuOpen(false)
        }
    }

  return (
    <div className='select-none'>
        <div className='w-full h-12 bg-primary-dark shadow-sm shadow-black relative z-10 flex items-center justify-between'>
            <div className='flex justify-start items-center '>
                <div className='text-white px-3 border-r h-full pt-1 cursor-pointer hover:bg-primary-semi' onClick={handleMenuClick}>
                    {/* Menu Icon */}
                    <div className='w-10 h-10' dangerouslySetInnerHTML={{__html: menuIcon}}></div>
                </div>
                <Link href="/" className='text-white ml-3 text-2xl font-semibold tracking-wide'>ambiGest</Link>
            </div>
            <div className='flex justify-end mr-2 py-1 px-2'>
                <NavbarSmallSecondMenu isUserLogged={isUserLogged} />
            </div>
        </div>
        <div className='hidden' id='navbarSmallItemsContainer'>
            <div className='absolute w-full h-full bg-slate-400 top-0 opacity-50'></div>
            <NavbarSmall_Items isUserLogged={isUserLogged} />
        </div>
    </div>
  )
}

export default NavbarSmall