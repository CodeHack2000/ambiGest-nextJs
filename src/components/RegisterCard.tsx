'use client'

import React, { useState } from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterCard() {
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")

  const router = useRouter()

  const handleWriteEmail = (email: string) => {
    setEmailText(email)
  }

  const handleWritePassword = (password: string) => {
    setPasswordText(password)
  }

  const handleRegister = async () => {
    if (emailText.length > 6 && passwordText.length > 6) {
      try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'user'

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailText,
            password: passwordText
          })
        })

        if (response.status === 201) {
          toast.info('É necessário validar o email!')
          
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        } else {
          const data = await response.json()
          const errorMessage = data.message[0].length > 1 ? data.message[0] : data.message;
          toast.error(errorMessage)
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  }

  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md text-left mt-6 mb-2'>Bem vindo a <span className='text-primary-dark'>ambiGest</span> !</span>
        <span className='text-sm mb-3 font-semibold'>Juntos tornamos o mundo melhor</span>
        <AuthInput mode="register" inputType='email' text={emailText} onWrite={handleWriteEmail} />
        <AuthInput mode="register" inputType='password' text={passwordText} onWrite={handleWritePassword} />
        <GreenBtn text='Registar' margin={true} action={handleRegister}/>
        <ToastContainer />
    </div>
  )
}
