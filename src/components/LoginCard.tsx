'use client'

import React, { useState } from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'

{/** PRECISA DE UMA FUNÇÃO PARA ENVIAR OS DADOS - O BOTÃO JÁ CONTEM O PARAMETRO ACTION */}
export default function LoginCard() {
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
        <span className='font-semibold text-md mt-6 mb-3 text-center'>Entrar no ambiGest</span>
        <AuthInput mode="login" inputType='email' text={emailText} onWrite={handleWriteEmail} />
        <AuthInput mode="login" inputType='password' text={passwordText} onWrite={handleWritePassword} />
        <GreenBtn text='Entrar' margin={true}/>
    </div>
  )
}
