import React from 'react'
import AuthButton from '@/ui/AuthButton'
import AuthInput from '@/ui/AuthInput'

export default function LoginCard() {
  return (
    <div className='mx-8 shadow-md shadow-black flex flex-col justify-center px-10 rounded-xl customAuthCardScreen'>
        <span className='font-semibold text-md mt-6 mb-8 text-center'>Entrar no ambiGest</span>
        <AuthInput mode="login" inputType='email' />
        <AuthInput mode="login" inputType='password' />
        <AuthButton mode="login" />
    </div>
  )
}
