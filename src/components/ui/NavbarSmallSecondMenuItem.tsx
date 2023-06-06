'use client'

import getIcon from '@/lib/GetIcon'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
// changed
interface NavbarSmallSecondMenuItemProps {
  name: String
}

const NavbarSmallSecondMenuItem: FC<NavbarSmallSecondMenuItemProps> = ({name}) => {
    const [iconImg, setIconImg] = useState(``)
    const [uri, setUri] = useState("")

    useEffect(() => {
        const iconData = getIcon(name)
        setIconImg(iconData.iconImg.toString())
        setUri(iconData.uri.toString())
    }, [name])

  return (
    <Link href={uri}>
        <div dangerouslySetInnerHTML={{__html: iconImg}} className='w-5 h-5 xs:iconSize xs:mx-2 transitionReScale mx-1 text-white'></div>
    </Link>
  )
}

export default NavbarSmallSecondMenuItem