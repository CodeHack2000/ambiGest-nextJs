'use client'

import getIcon from '@/lib/GetIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import handleLogout from '@/helpers/userLogout'

interface NavbarSmallSecondMenuItemProps {
  name: String
}

const NavbarSmallSecondMenuItem: FC<NavbarSmallSecondMenuItemProps> = ({name}) => {
    const [iconImg, setIconImg] = useState(``)
    const [uri, setUri] = useState("")

    const router = useRouter()

    useEffect(() => {
        const iconData = getIcon(name)
        setIconImg(iconData.iconImg.toString())
        setUri(iconData.uri.toString())
    }, [name])

    const handleUserLogout = async () => {
      const logoutStatus = await handleLogout()
  
      if (logoutStatus)
        router.push("/login")
    }

  return (
    <>
      {name === "logout" ? (
          <>
            <div onClick={handleUserLogout} dangerouslySetInnerHTML={{__html: iconImg}} className='w-5 h-5 xs:iconSize xs:mx-2 transitionReScale mx-1 text-white'></div>
          </>
      ) : (
        <Link href={uri}>
          <div dangerouslySetInnerHTML={{__html: iconImg}} className='w-5 h-5 xs:iconSize xs:mx-2 transitionReScale mx-1 text-white'></div>
        </Link>
      )}
    </>
  )
}

export default NavbarSmallSecondMenuItem