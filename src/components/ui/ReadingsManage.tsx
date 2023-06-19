'use client'

import { FC, useState } from 'react'
import ReadingsPopup from './ReadingsPopup'
import { Dayjs } from 'dayjs'

interface ReadingsManageProps {
    nextReadingDate: string
}

const ReadingsManage: FC<ReadingsManageProps> = ({nextReadingDate}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleBtnClick = () => {
        setIsPopupOpen(!isPopupOpen)
    }
    
    const handlePopupClose = () => {
        setIsPopupOpen(false)
    }

    const handlePopupSave = (date: Dayjs, readingNumber: string) => {
        setIsPopupOpen(false)
        // É PRECISO TRATAR OS DADOS QUE QUEREMOS SALVAR
    }

  return (
    <div className='flex flex-col items-center relative'>
        <div className='z-20'>
            {isPopupOpen ? (
                <ReadingsPopup onClose={handlePopupClose} onSave={handlePopupSave} />
            ): null}
        </div>
        <div className='w-full rounded-lg mx-2 bg-primary-light flex py-2 px-3 font-semibold'>
            <div className='flex flex-col w-2/3 items-center textSmall xs:text-sm'>
                <span>Próxima leitura automática</span>
                <span>{nextReadingDate}</span>
            </div>
            <button type='button' onClick={handleBtnClick} className='w-1/3 blueBtn text-sm'>
                Nova Leitura
            </button>
        </div>
    </div>
  )
}

export default ReadingsManage