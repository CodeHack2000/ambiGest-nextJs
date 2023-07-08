'use client'

import { FC, useState } from 'react'
import ReadingsPopup from './ReadingsPopup'
import { Dayjs } from 'dayjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

interface ReadingsManageProps {
    nextReadingDate: string
}

const ReadingsManage: FC<ReadingsManageProps> = ({nextReadingDate}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const router = useRouter()

    const handleBtnClick = () => {
        setIsPopupOpen(!isPopupOpen)
        toast.warning("Não é possível criar uma leitura com data anterior às faturas já criadas !", {autoClose: 8000})
    }
    
    const handlePopupClose = () => {
        setIsPopupOpen(false)
    }

    const handlePopupSave = async (date: Dayjs, readingNumber: string) => {
        setIsPopupOpen(false)
        
        const formattedDate = date.format("YYYY-MM-DD").toString()
        const formattedNumber = parseInt(readingNumber)

        if (formattedNumber < 1) {
            toast.error("O valor deve ser superior a 0 !")
        } else {
            try {
                const baseUrl = process.env.DEV_BASE_URL
                const url = baseUrl + 'water-readings'
                const token = localStorage.getItem('jwtToken')
    
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        amount: formattedNumber,
                        reading_date: formattedDate
                    })
                })
    
                if (response.status === 201) {
                    toast.success("Leitura criado com sucesso!")
                    
                    setTimeout(() => {
                        router.push('/')
                      }, 2000)
                } else if (response.status === 401) {
                    toast.error("O token é inválido!")
                    router.push('/')
                } else if (response.status === 400) {
                    toast.error("A data selecionada é inválida !")
                }
            } catch (error) {
                console.log('Error: ', error)
            }
        }
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
                <span>Próxima leitura...</span>
                <span>{nextReadingDate}</span>
            </div>
            <button type='button' onClick={handleBtnClick} className='w-1/3 blueBtn text-sm'>
                Nova Leitura
            </button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default ReadingsManage