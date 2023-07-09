'use client'

import React, { useState } from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPasswordCard() {
  const [emailText, setEmailText] = useState("")
  
  const router = useRouter()

  const handleWriteEmail = (email: string) => {
    setEmailText(email)
  }

  const handleForgotPassword = async () => {
    if (emailText.length > 6) {
      try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'auth/recover-password?email=' + emailText

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: emailText
          })
        })

        if (response.status === 204) {
          toast.info('Mensagem de recuperação de senha enviada.')
          toast.info('Verifique seu email para obter instruções de recuperação.')

          setTimeout(() => {
            router.push('/login')
          }, 4000)
        } else if (response.status === 400) {
          const data = await response.json()
          const errorMessage = data.message[0]
          toast.error(errorMessage)
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  }

  return (
    <div className='mediumCard'>
        <span className='font-bold text-xl text-center mt-6 mb-4'>Repor a palavra-passe</span>
        <span className='text-sm mt-2 mb-4'>Introduza o seu email verificado da sua conta de utilizador e enviar-lhe-emos o código de segurança para autorizar a redefinição de palavra-passe.</span>
        <AuthInput mode="forgotPassword" inputType='email' text={emailText} onWrite={handleWriteEmail} />
        <GreenBtn action={handleForgotPassword} text='Enviar email de redefinição de senha' margin={true} />
        <ToastContainer />
    </div>
  )
}
