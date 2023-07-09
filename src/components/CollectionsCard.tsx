'use client'

import { FC, useState } from 'react'
import CollectionMap from '@/ui/CollectionMap'
import CollectionSearchInput from '@/ui/CollectionSearchInput'
import GreenBtn from '@/ui/GreenBtn'
import { getGeocodeByAddress } from '@/helpers/map-geo-api'
import CollectionsPopup from '@/ui/CollectionsPopup'
import { Dayjs } from 'dayjs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

interface CollectionsCardProps {
  
}

const CollectionsCard: FC<CollectionsCardProps> = ({}) => {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09])
  const [search, setSearch] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const router = useRouter()

  const handleSearchWrite = (txt: string) => {
    setSearch(txt)
  }

  const handleSearch = async () => {
    const data: any = await getGeocodeByAddress(search)

    if (!data.error) {
      const location = data.results[0].locations[0]
      const latitude = location.latLng.lat
      const longitude = location.latLng.lng

      setCenter([latitude, longitude])
    }
  }

  const handleBtnSearch = () => {
    if (search.length > 0) {
        handleSearch()
    }
  }

  const handleBtnCreate = () => {
    if (search.length > 0) {
      setIsPopupOpen(!isPopupOpen)
    } else {
      toast.error("Selecione a sua localização!")
    }
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  const handePopupSave = async (date: Dayjs, collectionType: string, dayTime: string) => {
    setIsPopupOpen(false)
    const formattedDate = date.format('YYYY-MM-DD')
    const latitude = center[0]
    const longitude = center[1]

    if (!collectionType || collectionType.length < 1 || !dayTime || dayTime.length < 1)
      toast.error("Não pode haver campos vazios !")
    else {
      try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'waste-collection'
        const token = localStorage.getItem('jwtToken')
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            type: collectionType,
            latitude: latitude,
            longitude: longitude,
            pickup_at: formattedDate,
            time_of_day: dayTime
          })
        })
  
        if (response.status === 201) {
          toast.success('Recolha agendada com sucesso!')
           
          setTimeout(() => {
            router.push('/schedules')
          }, 2000)
        } else if (response.status === 401) {
          toast.error("O token é inválido!")
          router.push('/')
        } else if (response.status === 400) {
          toast.error("Ocorreu um erro, selecione outra data!")
        }
      } catch (error) {
        toast.error('Ocorreu um erro, tente novamente !')
        console.log(error)
      }
    }
  }

  return (
    <div className='mediumCard xs:h-card h-full'>
      <div>
        {isPopupOpen ? (
          <CollectionsPopup onClose={handlePopupClose} onSave={handePopupSave} />
        ) : null}
      </div>
      <span className='font-bold mt-4 text-xl'>Recolhas</span>
      <div className='flex flex-col items-center'>
        <div className='flex justify-evenly items-center my-2'>
            <CollectionSearchInput value={search} onWrite={handleSearchWrite} onSearch={handleBtnSearch} />
            <GreenBtn text='Criar' action={handleBtnCreate} props='w-1/3 ml-4' margin={false} />
        </div>
        <div className='xs:w-fit w-full xs:mx-2 mb-4 shadow shadow-black flex justify-center'>
          <CollectionMap center={center} />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default CollectionsCard