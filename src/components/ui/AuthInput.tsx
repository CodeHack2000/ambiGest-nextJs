'use client'

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

interface AuthInputProps {
  mode: string
  inputType: string
  text: string
  onWrite: (txt: string) => void
}

const AuthInput: FC<AuthInputProps> = ({mode, inputType, text, onWrite}) => {
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
    <>
        <div className='flex items-baseline justify-between'>
            {inputType.length > 0 ? (
                <label className='text-sm mt-5'>{labelText}</label>
            ) : null}
            {(inputType === "password" && mode === "login") ? (
                <Link href="/forgotPassword" className='text-xs font-bold hidden xs:inline'>Esqueceu-se da palavra-passe?</Link>
            ) : null}
        </div>
        <input value={text} onChange={(event) => onWrite(event.currentTarget.value)} className='w-full py-1 bg-customGray pl-4 mb-1 mt-1 rounded-lg text-sm' type={inputType} placeholder={inputPlaceholder}/>
        {(inputType === "password" && mode === "login") ? (
            <div className='xs:hidden flex justify-end mt-1'><Link href="/forgotPassword" className='text-xs font-bold'>Esqueceu-se da palavra-passe?</Link></div>
        ) : null}
    </>
  )
}

export default AuthInput