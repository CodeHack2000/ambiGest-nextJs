'use client'

import React, { useState } from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'

{/** PRECISA DE UMA FUNÇÃO PARA ENVIAR OS DADOS - O BOTÃO JÁ CONTEM O PARAMETRO ACTION */}
export default function RegisterCard() {
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")

  const handleWriteEmail = (email: string) => {
    setEmailText(email)
  }

  const handleWritePassword = (password: string) => {
    setPasswordText(password)
  }

  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md text-left mt-6 mb-2'>Bem vindo a <span className='text-primary-dark'>ambiGest</span> !</span>
        <span className='text-sm mb-3 font-semibold'>Juntos tornamos o mundo melhor</span>
        <AuthInput mode="register" inputType='email' text={emailText} onWrite={handleWriteEmail} />
        <AuthInput mode="register" inputType='password' text={passwordText} onWrite={handleWritePassword} />
        <GreenBtn text='Registar' margin={true} />
    </div>
  )
}
