'use client'

import { FC, useState } from 'react'
import PopupInput from '@/ui/PopupInput'
import PopupButton from '@/ui/PopupButton'


interface InvoicesPopupProps {
  onClose: () => void
  onSave: (price: string) => void
}

const InvoicesPopup: FC<InvoicesPopupProps> = ({onClose, onSave}) => {
  const [priceText, setPriceText] = useState("")

  const hanleWriteText = (text: string) => {
    setPriceText(text);
  }

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
        <div className='bg-white rounded-lg p-4 shadow shadow-black flex flex-col'>
            <div className='flex flex-col items-center'>
            <PopupInput inputType='number' writing={hanleWriteText} text={priceText}/>
            </div>
            <div className='flex justify-evenly mt-4'>
                <PopupButton btnAction={onClose} type='cancel' />
                <PopupButton btnAction={() => onSave(priceText)} type='save' />
            </div>
        </div>
      </div>
    </>
  )
}

export default InvoicesPopup