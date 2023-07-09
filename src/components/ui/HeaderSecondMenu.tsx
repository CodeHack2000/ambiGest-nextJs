import React from 'react'
import HeaderSecondMenuItem from '@/ui/HeaderSecondMenuItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FC } from 'react'
import { useRouter } from 'next/navigation'

interface HeaderSecondMenuProps {
  isUserLogged: Boolean
}

const HeaderSecondMenu: FC<HeaderSecondMenuProps> = ({isUserLogged}) => {
  const router = useRouter()

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
    <div className='mr-28 w-full flex justify-end'>
        {isUserLogged ? (
          <>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="user" isUserLogged={true}/>
              <div className='secondMenuItem' style={{marginTop: "5.3rem", right: "18.5rem"}}>Perfil</div>
            </div>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="help" isUserLogged={true}/>
              <div className='secondMenuItem w-32' style={{marginTop: "5.3rem", right: "15.1rem"}}>Centro de Ajuda</div>
            </div>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="therms" isUserLogged={true}/>
              <div className='secondMenuItem w-52' style={{marginTop: "5.3rem", right: "11.6rem"}}>Privacidade, Termos e Condições</div>
            </div>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="phone" isUserLogged={true}/>
              <div className='secondMenuItem' style={{marginTop: "5.3rem", right: "8.1rem"}}>Contactos</div>
            </div>
            <div className='group' onClick={handleLogout}>
              <HeaderSecondMenuItem name="logout" isUserLogged={true}/>
              <div className='secondMenuItem' style={{marginTop: "5.3rem", right: "4.5rem"}}>Logout</div>
              <ToastContainer />
            </div>
          </>
        ) : (
          <>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="facebook" isUserLogged={false}/>
              <div className='secondMenuItem w-32' style={{marginTop: "5.3rem", right: "15rem"}}>Continuar com Facebook</div>
            </div>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="google" isUserLogged={false}/>
              <div className='secondMenuItem w-32' style={{marginTop: "5.3rem", right: "11.5rem"}}>Continuar com Google</div>
            </div>
            <div className='mr-14 group'>
              <HeaderSecondMenuItem name="apple" isUserLogged={false}/>
              <div className='secondMenuItem w-32' style={{marginTop: "5.3rem", right: "8.1rem"}}>Continuar com Apple</div>
            </div>
          </>
        )}
    </div>
  )
}

export default HeaderSecondMenu