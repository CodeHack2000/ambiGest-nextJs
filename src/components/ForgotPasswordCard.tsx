import React from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'

export default function ForgotPasswordCard() {
  return (
    <div className='mediumCard'>
        <span className='font-bold text-xl text-center mt-6 mb-4'>Repor a palavra-passe</span>
        <span className='text-sm mt-2 mb-4'>Introduza o seu email verificado da sua conta de utilizador e enviar-lhe-emos o código de segurança para autorizar a redefinição de palavra-passe.</span>
        <AuthInput mode="forgotPassword" inputType='email' />
        <GreenBtn text='Enviar email de redefinição de senha' />
    </div>
  )
}
