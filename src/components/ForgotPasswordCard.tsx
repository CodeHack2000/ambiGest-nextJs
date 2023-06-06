import React from 'react'
import AuthButton from '@/ui/AuthButton'
import AuthInput from '@/ui/AuthInput'

// changed
export default function ForgotPasswordCard() {
  return (
    <div className='mx-8 shadow-md shadow-black flex flex-col justify-center px-10 rounded-xl customAuthCardScreen'>
        <span className='font-bold text-xl text-center mt-6 mb-4'>Repor a palavra-passe</span>
        <span className='text-sm mt-2 mb-4'>Introduza o seu email verificado da sua conta de utilizador e enviar-lhe-emos o código de segurança para autorizar a redefinição de palavra-passe.</span>
        <AuthInput mode="forgotPassword" inputType='email' />
        <AuthButton mode="forgotPassword" />
    </div>
  )
}
