'use client'

import { FC, useState } from 'react'
import PopupInput from '@/ui/PopupInput'
import PopupButton from '@/ui/PopupButton'


interface UserPopupProps {
  onClose: () => void
  onSave: (writtenText: string, secondWrittenText?: string) => void
  type: string
}

const UserPopup: FC<UserPopupProps> = ({onClose, onSave, type}) => {
  const [writtenText, setWrittenText] = useState("")
  const [secondWrittenText, setSecondWrittenText] = useState("")

  const hanleWriteText = (text: string) => {
    setWrittenText(text);
  }

  const handleSecondWriteText = (text: string) => {
    setSecondWrittenText(text)
  }

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
        <div className='bg-white rounded-lg p-4 shadow shadow-black flex flex-col'>
            <div className='flex flex-col items-center'>
              {type === "username" ? (
                <PopupInput inputType='username' writing={hanleWriteText} text={writtenText}/>
              ) : (
                <>
                    <PopupInput inputType='email' writing={hanleWriteText} text={writtenText}/>
                    <PopupInput inputType='password' writing={handleSecondWriteText} text={secondWrittenText}/>
                </>
              )}
            </div>
            <div className='flex justify-evenly mt-4'>
                <PopupButton btnAction={onClose} type='cancel' />
                {type === "username" ? (
                    <PopupButton btnAction={() => onSave(writtenText)} type='save' />
                ) : (
                    <PopupButton btnAction={() => onSave(writtenText, secondWrittenText)} type='save' />
                )}
            </div>
        </div>
      </div>
    </>
  )
}

export default UserPopup