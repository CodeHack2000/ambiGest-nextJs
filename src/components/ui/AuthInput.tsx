'use client'

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

interface AuthInputProps {
  mode: String
  inputType: string
}

const AuthInput: FC<AuthInputProps> = ({mode, inputType}) => {
    const [labelText, setLabelText] = useState("")
    const [inputPlaceholder, setInputPlaceholder] = useState("")

    useEffect(() => {
        if (mode === "register") {
            if (inputType === "email") {
                setLabelText("Insira o seu email*")
                setInputPlaceholder("Email")
            } else if (inputType === "password") {
                setLabelText("Crie uma palavra-passe*")
                setInputPlaceholder("Palavra-passe")
            }
        } else if (mode === "login") {
            if (inputType === "email") {
                setLabelText("Email")
                setInputPlaceholder("Email")
            } else if (inputType === "password") {
                setLabelText("Palavra-passe")
                setInputPlaceholder("Palavra-passe")
            }
        } else if (mode === "forgotPassword") {
            setInputPlaceholder("Insira o seu email")
        }
    }, [mode, inputType])

  return (
    <div>
        <div className='flex items-baseline justify-between'>
            {inputType.length > 0 ? (
                <label className='text-sm'>{labelText}</label>
            ) : null}
            {(inputType === "password" && mode === "login") ? (
                <Link href="/forgotPassword" className='text-xs font-bold'>Esqueceu-se da palavra-passe?</Link>
            ) : null}
        </div>
        <input className='w-full py-1 bg-customGray pl-4 mb-5 mt-1 rounded-lg text-sm' type={inputType} placeholder={inputPlaceholder}/>
    </div>
  )
}

export default AuthInput