'use client'

import getIcon from '@/lib/GetIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleLogout = async () => {
      try {
        const token = localStorage.getItem('jwtToken')
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'auth/logout'
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
  
        if (response.status === 204) {
          toast.success('Logout com sucesso!')
          localStorage.clear()
          router.push('/login')
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    }

  return (
    <>
      {name === "logout" ? (
          <>
            <div onClick={handleLogout} dangerouslySetInnerHTML={{__html: iconImg}} className='w-5 h-5 xs:iconSize xs:mx-2 transitionReScale mx-1 text-white'></div>
            <ToastContainer />
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