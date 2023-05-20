import React from 'react'
import AuthButton from '@/ui/AuthButton'
import AuthInput from '@/ui/AuthInput'

export default function RegisterCard() {
  return (
    <div className='mx-8 shadow-md shadow-black flex flex-col justify-center px-10 rounded-xl customAuthCardScreen'>
        <span className='font-semibold text-md text-left mt-6 mb-2'>Bem vindo a <span className='text-primary-dark'>ambiGest</span> !</span>
        <span className='text-sm mb-8 font-semibold'>Juntos tornamos o mundo melhor</span>
        <AuthInput mode="register" inputType='email' />
        <AuthInput mode="register" inputType='password' />
        <AuthButton mode="register" />
    </div>
  )
}
