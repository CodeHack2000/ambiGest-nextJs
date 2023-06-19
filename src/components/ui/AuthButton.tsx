'use client'

import { FC, useEffect, useState } from 'react'

interface AuthButtonProps {
  mode: String
}

const AuthButton: FC<AuthButtonProps> = ({mode}) => {
    const [buttonText, setButtonText] = useState("")

    useEffect(() => {
        if (mode === "forgotPassword") {
            setButtonText("Enviar email de redefinição de senha")
        } else if (mode === "register") {
            setButtonText("Registar")
        } else if (mode === "login") {
          setButtonText("Entrar")
        }
    }, [mode])

  return <button className='uppercase bg-primary-dark rounded-lg py-1 text-white text-sm mt-8 mb-8 shadow-sm shadow-black'>{buttonText}</button>
}

export default AuthButton