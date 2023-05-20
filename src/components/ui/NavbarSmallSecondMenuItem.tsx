'use client'

import getIcon from '@/lib/GetIcon'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

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
        <div dangerouslySetInnerHTML={{__html: iconImg}} className='w-6 h-6 transitionReScale mx-2 text-white'></div>
    </Link>
  )
}

export default NavbarSmallSecondMenuItem