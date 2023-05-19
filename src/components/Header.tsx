'use client'

import React, { useEffect } from 'react'
import HeaderLogo from '@/ui/HeaderLogo'
import HeaderSecondMenu from '@/ui/HeaderSecondMenu'

import { FC } from 'react'

interface HeaderProps {
  isUsedLogged: Boolean
}

const Header: FC<HeaderProps> = ({isUsedLogged}) => {
  useEffect(() => {
    const headerContainer = document.querySelector("#headerContainer")
    if (!isUsedLogged) {
      headerContainer?.classList.add("border-b-4")
      headerContainer?.classList.add("border-primary-dark")
    } 
  }, [isUsedLogged])

  return (
    <div className='w-full flex justify-evenly relative' id='headerContainer'>
        <div className='w-full flex-col'>
            <div style={{zIndex: 0}} className='w-full h-2 bg-primary-light absolute top-0'></div>
            {/* Logo */}
            <HeaderLogo />
        </div>
        {/* Second Menu */}
        <HeaderSecondMenu isUserLogged={isUsedLogged} />
    </div>
  )
}

export default Header