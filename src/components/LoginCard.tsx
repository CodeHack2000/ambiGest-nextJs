'use client'

import React, { useState } from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginCard() {
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")

  const router = useRouter()

  const handleWriteEmail = (email: string) => {
    setEmailText(email)
  }

  const handleWritePassword = (password: string) => {
    setPasswordText(password)
  }

  const handleLogin = async () => {
    if (emailText.length > 6 && passwordText.length > 6) {
      try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'auth/login'

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

        const data = await response.json()

        if (response.status === 200) {
          if (data) {
            const token = data.token
            const localStorage = window.localStorage
            localStorage.setItem('jwtToken', token)

            toast.success("Login com sucesso!")
            
            setTimeout(() => {
              router.push('/')
            }, 2000)
          }
        } else if (response.status === 401) {
          toast.warning("É preciso validar o email!")
        } else if (response.status === 400) {
          const errorMessage = data.message[0]
          toast.error(errorMessage)
        }
      } catch (error) {
        console.log('Error: ', error)
        toast.error("Login sem sucesso!")
      }
    }
  }

  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md mt-6 mb-3 text-center'>Entrar no ambiGest</span>
        <AuthInput mode="login" inputType='email' text={emailText} onWrite={handleWriteEmail} />
        <AuthInput mode="login" inputType='password' text={passwordText} onWrite={handleWritePassword} />
        <GreenBtn text='Entrar' margin={true} action={handleLogin}/>
        <ToastContainer />
    </div>
  )
}
