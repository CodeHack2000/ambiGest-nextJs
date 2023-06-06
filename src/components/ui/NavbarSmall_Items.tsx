import Link from 'next/link'
import React from 'react'

import { FC } from 'react'

// changed
interface NavbarSmall_ItemsProps {
  isUserLogged: Boolean
}

const NavbarSmall_Items: FC<NavbarSmall_ItemsProps> = ({isUserLogged}) => {
  return (
    <>
      {isUserLogged ? (
        <div className='w-full h-fit absolute'>
          <Link href="#" className='navbarSmallItem'>Recolhas</Link>
          <Link href="#" className='navbarSmallItem'>Faturação</Link>
          <Link href="#" className='navbarSmallItem'>Agenda</Link>
          <Link href="#" className='navbarSmallItem'>Recolhas</Link>
        </div>
      ) : (
        <div className='w-full h-fit absolute'>
          <Link href="/login" className='navbarSmallItem'>Login</Link>
          <Link href="/register" className='navbarSmallItem'>Registo</Link>
        </div>
      )}
    </>
  )
}

export default NavbarSmall_Items