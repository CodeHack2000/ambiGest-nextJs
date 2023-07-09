'use client'

import { FC, useEffect, useState } from 'react'
import PopupInput from '@/ui/PopupInput'
import PopupDatepicker from '@/ui/PopupDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import PopupButton from '@/ui/PopupButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'


interface CollectionsPopupProps {
  onClose: () => void
  onSave: (date: Dayjs, readingNumber: string, dayTime: string) => void
  onDestroy?: () => void
  modify?: boolean
  id?: string
}

const CollectionsPopup: FC<CollectionsPopupProps> = ({onClose, onSave, modify, id, onDestroy}) => {
  const [collection, setCollection] = useState("Vidro")
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [selectedDayTime, setSelectedDaytime] = useState("Manhã")
  const [finishedGetRequest, setFinishedGetRequest] = useState(false)

  const router = useRouter()

  const handleSetDate = (date: Dayjs) => {
    setSelectedDate(date);
  }

  const handleCollectionChoose = (selected: string) => {
    setCollection(selected)
  }

  const handleDaytimeChoose = (selected: string) => {
    setSelectedDaytime(selected)
  }

  useEffect(() => {
    const getEvent = async () => {
      try {
        const baseUrl = process.env.DEV_BASE_URL
        const url = baseUrl + 'waste-collection/detail?id=' + id
        const token = localStorage.getItem('jwtToken')

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.status === 200) {
          const data = await response.json()

          const newEvent: SchedulesDatasetType = {
            type: data.type,
            latitude: data.latitude,
            longitude: data.longitude,
            pickup_at: data.pickup_at,
            time_of_day: data.time_of_day,
            id: data._id,
            color: ""
          }

          setSelectedDate(dayjs(newEvent.pickup_at))
          setCollection(newEvent.type)
          setSelectedDaytime(newEvent.time_of_day)
          setFinishedGetRequest(true)
        } else if (response.status === 401) {
          toast.error("O token é inválido!")
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (modify && id && id?.length > 1) {
      getEvent()
    }
  }, [modify, id])

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
        <div className='bg-white rounded-lg p-4 shadow shadow-black flex flex-col'>
            <div className='flex flex-col items-center'>
              {(modify && id && id?.length) ? (
                finishedGetRequest && (
                  <>
                    <PopupDatepicker setDate={handleSetDate} date={selectedDate} defaultDate={selectedDate}/>
                    <PopupInput inputType='collection' onChoose={handleCollectionChoose} text={collection} defaultValue={collection}/>
                    <PopupInput inputType='dayTime' onChoose={handleDaytimeChoose} text={selectedDayTime} defaultValue={selectedDayTime}/>
                  </>
                )
              ) : (
                <>
                  <PopupDatepicker setDate={handleSetDate} date={selectedDate} />
                  <PopupInput inputType='collection' onChoose={handleCollectionChoose} text={collection}/>
                  <PopupInput inputType='dayTime' onChoose={handleDaytimeChoose} text={selectedDayTime}/>
                </>
              )}
            </div>
            <div className='flex justify-evenly mt-4'>
              <PopupButton btnAction={onClose} type='cancel' />
              {(modify?.valueOf() === true && onDestroy) ? (
                <PopupButton btnAction={onDestroy} type='delete' props='mx-2'/>
              ) : null}
              <PopupButton btnAction={() => onSave(selectedDate, collection, selectedDayTime)} type='save' />
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default CollectionsPopup