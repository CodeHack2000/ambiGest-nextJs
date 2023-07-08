'use client'

import { FC, useState } from 'react'
import InvoicesItem from '@/ui/InvoicesItem'
import InvoicesContractData from '@/ui/InvoicesContractData'
import InvoicesPopup from './ui/InvoicesPopup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

interface InvoicesCardProps {
  pricePerM3: number
}

const InvoicesCard: FC<InvoicesCardProps> = ({pricePerM3}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const router = useRouter()

  const handlePopupOpen = () => {
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  const handlePopupSave = async (price: string) => {
    setIsPopupOpen(false)
    
    const baseUrl = process.env.DEV_BASE_URL
    const url = baseUrl + 'water-contract'
    const token = localStorage.getItem('jwtToken')
    
    if (pricePerM3 != 0) {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            "value_per_m3": parseInt(price)
          })
        })

        if (response.status === 401) {
          toast.error("O token é inválido!")
          router.push('/')
        } else if (response.status === 400) {
          const data = await response.json()
          const errorMessage = data.message[0].length > 1 ? data.message[0] : data.message
          toast.error(errorMessage)
        } else if (response.status === 200) {
          toast.success("Contrato atualizado com sucesso!")

          setTimeout(() => {
            router.push('/')
          }, 2000)
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    } else {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            "value_per_m3": parseInt(price)
          })
        })

        if (response.status === 401) {
          toast.error("O token é inválido!")
          router.push('/')
        } else if (response.status === 400) {
          const data = await response.json()
          const errorMessage = data.message[0].length > 1 ? data.message[0] : data.message
          toast.error(errorMessage)
        } else if (response.status === 201) {
          toast.success("Contrato criado com sucesso!")

          setTimeout(() => {
            router.push('/')
          }, 2000)
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  }

  // <InvoicesItem month="Janeiro" spent={16.2} increase={-0.5} total={22.90} />
  return (
    <div className='mediumCard xs:h-card h-full'>
      <div>
        {isPopupOpen ? (
          <InvoicesPopup onClose={handlePopupClose} onSave={handlePopupSave}/>
        ) : null}
      </div>
      <span className='font-bold mt-6 text-xl mb-2'>As minhas faturas</span>
      <InvoicesContractData pricePerM3={pricePerM3} action={handlePopupOpen}/>
      <div className='my-2 overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full flex flex-col items-center'>
        {/** AQUI FICA O INVOICES ITEM */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default InvoicesCard