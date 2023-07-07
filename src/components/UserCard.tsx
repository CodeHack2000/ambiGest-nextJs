'use client'

import React, { FC, useState } from 'react'
import UserBasicInfo from '@/ui/UserBasicInfo'
import GreenBtn from '@/ui/GreenBtn'
import UserPopup from '@/ui/UserPopup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import handleLogout from '@/helpers/userLogout'

interface UserCardDataProps {
    username: String
}

const UserCard: FC<UserCardDataProps> = ({username}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [popupType, setPopupType] = useState("")

    const router = useRouter()

    const handlePopupView = (type: string) => {
        setPopupType(type)
        setIsPopupOpen(true)

        if (type === "email")
            toast.warning("Cuidado! Se você inserir um email incorreto, poderá perder o acesso à sua conta.", {autoClose: 7000})
    }

    const handlePopupClose = () => {
        setIsPopupOpen(false)
    }

    const handleUserLogout = async () => {
        const logoutStatus = await handleLogout()
    
        if (logoutStatus)
          router.push("/login")
      }
    
    const handePopupSave = async (text: string, secondText?: string) => {
        setIsPopupOpen(false)
        const baseUrl = process.env.DEV_BASE_URL

        if (popupType === "username") {
            if (text.length > 4) {
                try {
                    const url = baseUrl + 'user/username?username=' + text
                    const token = localStorage.getItem('jwtToken')

                    const response = await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    })

                    if (response.status === 200) {
                        toast.success("Username alterado com sucesso!")

                        setTimeout(() => {
                            router.push('/')
                        }, 1000)
                    } else if (response.status === 401) {
                        toast.error("Ocorreu um erro, tente novamente!")

                        setTimeout(() => {
                            router.push('/')
                        }, 1000)
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                toast.error("O username deve possuir pelo menos 4 caracteres!")
            }
        } else if (popupType === "email") {
            if (text.length > 4 && secondText!.length > 5) {
                try {
                    const url = baseUrl + 'auth/change-email'
                    const token = localStorage.getItem('jwtToken')

                    const response = await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                          email: text,
                          password: secondText  
                        })
                    })

                    if (response.status === 204) {
                        toast.success("Email alterado com sucesso!")
                        toast.warning("Por favor, valide o novo email para concluir a alteração.", {autoClose: 5000})

                        setTimeout(async() => {
                            await handleUserLogout()
                        }, 2000)
                    } else if (response.status === 400) {
                        const data = await response.json()
                        const errorMessage = data.message[0].length > 1 ? data.message[0] : data.message
                        toast.error(errorMessage)
                    } else if (response.status === 401) {
                        toast.error("Ocorreu um erro!")

                        setTimeout(() => {
                            router.push('/')
                        }, 1000)
                    } else if (response.status === 500) {
                        toast.error("Insire um email válido!")
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                toast.error("Todos os campos devem ser preenchidos corretamente!")
            }
        }
    }    

  return (
    <div className='w-full sm:w-1/2 mx-8 shadow-md shadow-black flex justify-center px-10 rounded-xl lg:w-2/5 mt-20 h-80 lg:h-96'>
        <div>
            {isPopupOpen ? (
            <UserPopup onClose={handlePopupClose} onSave={handePopupSave} type={popupType}/>
            ) : null}
        </div>
        <div className='flex flex-col items-center justify-center'>
            <UserBasicInfo username={username} />
            <div className='flex mt-6'>
                <GreenBtn text='Alterar Username' action={() => handlePopupView("username")} margin={false} props='px-4 w-1/2 mr-4'/>
                <GreenBtn text='Alterar Email' action={() => handlePopupView("email")} margin={false} props='px-4 w-1/2'/>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default UserCard