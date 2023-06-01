import React from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from '@/ui/GreenBtn'

export default function LoginCard() {
  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md mt-6 mb-3 text-center'>Entrar no ambiGest</span>
        <AuthInput mode="login" inputType='email' />
        <AuthInput mode="login" inputType='password' />
        <GreenBtn text='Entrar'/>
    </div>
  )
}
