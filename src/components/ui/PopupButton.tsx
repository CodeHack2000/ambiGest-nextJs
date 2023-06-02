'use client'

import { FC, useEffect, useState } from 'react'

interface PopupButtonProps {
  type: string
  btnAction: () => void
}

const PopupButton: FC<PopupButtonProps> = ({type, btnAction}) => {
    const [btnText, setBtnText] = useState("")
    const [btnStyle, setBtnStyle] = useState("")

    useEffect(() => {
        switch (type) {
          case "cancel":
            setBtnText("Voltar")
            setBtnStyle("py-1 px-3 border border-primary-dark rounded-xl text-primary-dark w-28 transitionReScale")
            break;

          case "save":
            setBtnText("Guardar")
            setBtnStyle("py-1 px-3 rounded-xl text-white bg-primary-dark w-28 transitionReScale") 
            break;
        
          default:
            setBtnText("Criar")
            setBtnStyle("py-1 px-3 rounded-xl text-white bg-primary-dark w-28 transitionReScale") 
            break;
        }
    }, [type])

  return (
    <button type='button' onClick={btnAction}>{btnText}</button>
  )
}

export default PopupButton