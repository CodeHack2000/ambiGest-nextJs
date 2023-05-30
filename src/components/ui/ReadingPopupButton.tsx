'use client'

import { FC, useEffect, useState } from 'react'

interface ReadingPopupButtonProps {
  type: string
  btnAction: () => void
}

const ReadingPopupButton: FC<ReadingPopupButtonProps> = ({type, btnAction}) => {
    const [btnText, setBtnText] = useState("")

    useEffect(() => {
        if (type === "canclel") {
            setBtnText("Voltar")
        } else {
            setBtnText("Guardar")
        }
    }, [type])

  return (
    <button type='button' onClick={btnAction}>{btnText}</button>
  )
}

export default ReadingPopupButton