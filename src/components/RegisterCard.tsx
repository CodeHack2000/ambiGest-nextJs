import React from 'react'
import AuthInput from '@/ui/AuthInput'
import GreenBtn from './ui/GreenBtn'

export default function RegisterCard() {
  return (
    <div className='mediumCard'>
        <span className='font-semibold text-md text-left mt-6 mb-2'>Bem vindo a <span className='text-primary-dark'>ambiGest</span> !</span>
        <span className='text-sm mb-3 font-semibold'>Juntos tornamos o mundo melhor</span>
        <AuthInput mode="register" inputType='email' />
        <AuthInput mode="register" inputType='password' />
        <GreenBtn text='Registar' />
    </div>
  )
}
