'use client'

import { FC, useState } from 'react'
import ReadingPopupInput from './ReadingPopupInput'
import ReadingPopupDatepicker from './ReadingPopupDatepicker'
import dayjs, { Dayjs } from 'dayjs'
import ReadingPopupButton from './ReadingPopupButton'


interface ReadingsPopupProps {
  onClose: () => void
  onSave: (date: Dayjs, readingNumber: string) => void
}

const ReadingsPopup: FC<ReadingsPopupProps> = ({onClose, onSave}) => {
  const [numberWrite, setNumberWrite] = useState("")
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const handleSetDate = (date: Dayjs) => {
    setSelectedDate(date);
  }

  const handleNumberWrite = (text: string) => {
    setNumberWrite(text);
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
        <div className='bg-white rounded-lg p-4 shadow shadow-black flex flex-col'>
            <div className='flex flex-col items-center'>
              <ReadingPopupDatepicker setDate={handleSetDate} date={selectedDate} />
              <ReadingPopupInput inputType='number' writing={handleNumberWrite} text={numberWrite}/>
            </div>
            <div className='flex justify-evenly mt-4'>
                <ReadingPopupButton btnAction={onClose} type='cancel' />
                <ReadingPopupButton btnAction={() => onSave(selectedDate, numberWrite)} type='save' />
            </div>
        </div>
    </div>
  )
}

export default ReadingsPopup