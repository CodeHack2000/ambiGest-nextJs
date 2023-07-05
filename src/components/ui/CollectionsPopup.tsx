'use client'

import { FC, useState } from 'react'
import PopupInput from '@/ui/PopupInput'
import PopupDatepicker from '@/ui/PopupDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import PopupButton from '@/ui/PopupButton'
import Link from 'next/link'


interface CollectionsPopupProps {
  onClose: () => void
  onSave: (date: Dayjs, readingNumber: string) => void
}

const CollectionsPopup: FC<CollectionsPopupProps> = ({onClose, onSave}) => {
  const [collection, setCollection] = useState("")
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const handleSetDate = (date: Dayjs) => {
    setSelectedDate(date);
  }

  const handleCollectionChoose = (selected: string) => {
    setCollection(selected)
  }

  // AO SALVAR É PRECISO VERIFIAR SE OS VALORES ESTÃO VAZIOS
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
        <div className='bg-white rounded-lg p-4 shadow shadow-black flex flex-col'>
            <div className='flex flex-col items-center'>
              <PopupDatepicker setDate={handleSetDate} date={selectedDate} />
              <PopupInput inputType='collection' onChoose={handleCollectionChoose} text={collection}/>
            </div>
            <div className='flex justify-evenly mt-4'>
                <PopupButton btnAction={onClose} type='cancel' />
                <Link href="/schedules"><PopupButton btnAction={() => onSave(selectedDate, collection)} type='save' /></Link>
            </div>
        </div>
    </div>
  )
}

export default CollectionsPopup