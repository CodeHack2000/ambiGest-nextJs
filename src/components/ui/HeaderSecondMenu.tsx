import React from 'react'
import HeaderSecondMenuItem from '@/ui/HeaderSecondMenuItem'
import handleLogout from '@/helpers/userLogout'
import { FC } from 'react'
import { useRouter } from "next/navigation"

interface HeaderSecondMenuProps {
  isUserLogged: Boolean
}

const HeaderSecondMenu: FC<HeaderSecondMenuProps> = ({isUserLogged}) => {
  const router = useRouter()

  const handleUserLogout = async () => {
    const logoutStatus = await handleLogout()

    if (logoutStatus)
      router.push("/login")
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
            <div className='group' onClick={handleUserLogout}>
              <HeaderSecondMenuItem name="logout" isUserLogged={true}/>
              <div className='secondMenuItem' style={{marginTop: "5.3rem", right: "4.5rem"}}>Logout</div>
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