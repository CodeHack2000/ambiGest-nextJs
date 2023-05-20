import React from 'react'

import { FC } from 'react'
import NavbarSmallSecondMenuItem from '@/ui/NavbarSmallSecondMenuItem'

interface NavbarSmallSecondMenuProps {
  isUserLogged: Boolean
}

const NavbarSmallSecondMenu: FC<NavbarSmallSecondMenuProps> = ({isUserLogged}) => {
  return (
    <>
        {isUserLogged ? (
            <div className='flex'>
                <NavbarSmallSecondMenuItem name="user"/>
                <NavbarSmallSecondMenuItem name="help"/>
                <NavbarSmallSecondMenuItem name="therms"/>
                <NavbarSmallSecondMenuItem name="phone"/>
                <NavbarSmallSecondMenuItem name="logout"/>
            </div>
        ) : (
            <div className='flex'>
                <NavbarSmallSecondMenuItem name="facebook"/>
                <NavbarSmallSecondMenuItem name="google"/>
                <NavbarSmallSecondMenuItem name="apple"/>
            </div>
        )}
    </>
  )
}

export default NavbarSmallSecondMenu
