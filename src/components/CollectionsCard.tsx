'use client'

import { FC, useState } from 'react'
import CollectionMap from '@/ui/CollectionMap'
import CollectionSearchInput from '@/ui/CollectionSearchInput'
import GreenBtn from '@/ui/GreenBtn'
import { getGeocodeByAddress } from '@/helpers/map-geo-api'
import CollectionsPopup from '@/ui/CollectionsPopup'
import { Dayjs } from 'dayjs'

interface CollectionsCardProps {
  
}

const CollectionsCard: FC<CollectionsCardProps> = ({}) => {
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09])
  const [search, setSearch] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

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
    }
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  // É PRECISO TRATAR OS DADOS A SEREM SALVOS OBS.: NÃO ESQUECER QUE É NECESSÁRIO GUARDAR A LATITUDE E LONGITUDE DO LOCAL ONDE O CLIENTE DESEJA REALIZAR A RECOLHA
  const handePopupSave = (date: Dayjs, collectionType: string) => {
    setIsPopupOpen(false)
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
    </div>
  )
}

export default CollectionsCard