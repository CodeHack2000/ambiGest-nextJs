'use client'

import getIcon from '@/lib/GetIcon'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

// changed 
interface HeaderSecondMenuItemProps {
  name: String
  isUserLogged: Boolean
}

const HeaderSecondMenuItem: FC<HeaderSecondMenuItemProps> = ({name, isUserLogged}) => {
    const [iconImg, setIconImg] = useState(``)
    const [uri, setUri] = useState("")

    useEffect(() => {
        const iconData = getIcon(name)
        setIconImg(iconData.iconImg.toString())
        setUri(iconData.uri.toString())
    }, [name])

  return (
    <Link href={uri}>
      {isUserLogged ? (
        <div className='w-10 h-14 bg-primary-dark rounded-md flex items-center justify-center absolute shadow shadow-black hover:h-20 cursor-pointer group transition-height duration-300 ease-in-out' style={{zIndex: 1, top: "-4px"}}>
          <div id='secondMenuItem' dangerouslySetInnerHTML={{__html: iconImg}} className='text-white w-8 h-6 group-hover:mt-6 group-transition-margin duration-150 ease-in-out'></div>
        </div>
      ) : (
        <div className='w-10 h-14 bg-primary-dark rounded-md flex items-center justify-center absolute shadow shadow-black hover:h-20 cursor-pointer group transition-height duration-300 ease-in-out' style={{zIndex: 1, top: "-4px"}}>
          <div id='secondMenuItem' dangerouslySetInnerHTML={{__html: iconImg}} className='text-white w-8 h-7 group-hover:mt-8 group-transition-margin duration-150 ease-in-out mt-3'></div>
        </div>
      )}
    </Link>
  )
}

export default HeaderSecondMenuItem