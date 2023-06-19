import React from 'react'
import AuthButton from '@/ui/AuthButton'
import AuthInput from '@/ui/AuthInput'

export default function LoginCard() {
  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md mt-6 mb-3 text-center'>Entrar no ambiGest</span>
        <AuthInput mode="login" inputType='email' />
        <AuthInput mode="login" inputType='password' />
        <AuthButton mode="login" />
    </div>
  )
}
