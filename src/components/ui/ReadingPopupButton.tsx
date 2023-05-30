'use client'

import { FC, useEffect, useState } from 'react'

interface ReadingPopupButtonProps {
  type: string
  btnAction: () => void
}

const ReadingPopupButton: FC<ReadingPopupButtonProps> = ({type, btnAction}) => {
    const [btnText, setBtnText] = useState("")
    const [btnStyle, setBtnStyle] = useState("")

    useEffect(() => {
        if (type === "cancel") {
            setBtnText("Voltar")
            setBtnStyle("py-1 px-3 border border-primary-dark rounded-xl text-primary-dark w-28 transitionReScale")
        } else {
            setBtnText("Guardar")
            setBtnStyle("py-1 px-3 rounded-xl text-white bg-primary-dark w-28 transitionReScale") 
        }
    }, [type])

  return (
    <button type='button' className={btnStyle} onClick={btnAction}>{btnText}</button>
  )
}

export default ReadingPopupButton