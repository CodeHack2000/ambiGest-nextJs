import Link from 'next/link'
import React from 'react'

import { FC } from 'react'

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
          <Link href="#" className='navbarSmallItem'>Continuar com Facebook</Link>
          <Link href="#" className='navbarSmallItem'>Continuar com Google</Link>
          <Link href="#" className='navbarSmallItem'>Continuar com Apple</Link>
        </div>
      )}
    </>
  )
}

export default NavbarSmall_Items