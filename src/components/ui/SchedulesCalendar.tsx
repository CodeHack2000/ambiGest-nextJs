'use client'

import { FC, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DatesSetArg } from '@fullcalendar/core'
import { Dayjs } from 'dayjs'
import CollectionsPopup from './CollectionsPopup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'


interface SchedulesCalendarProps {
  events: SchedulesDatasetType[]
  onMonthChange: (month: number) => void
}

const SchedulesCalendar: FC<SchedulesCalendarProps> = ({events, onMonthChange}) => {
  const [convertedEvents, setConvertedEvents] = useState<EventType[]>([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [eventId, setEventId] = useState("")

  const router = useRouter()

  useEffect(() => {
    const convertEventsData = () => {
      const converted: EventType[] = events.map((event) => ({
        title: event.type,
        date: event.pickup_at,
        time: event.time_of_day,
        color: event.color,
        id: event.id
      }))
      setConvertedEvents(converted)
    }

    convertEventsData()
  }, [events])

  const handlePopupClose = () => {
    setIsPopupOpen(false)
  }

  const handlePopupSave = async (date: Dayjs, collectionType: string, dayTime: string) => {
    setIsPopupOpen(false)
    const formattedDate = date.format('YYYY-MM-DD')
    const baseUrl = process.env.DEV_BASE_URL
    const url = baseUrl + 'waste-collection'
    const token = localStorage.getItem('jwtToken')

    console.log(formattedDate)
    console.log(collectionType)
    console.log(dayTime)
    console.log(eventId)

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          "id": eventId,
          "type": collectionType,
          "pickup_at": formattedDate,
          "time_of_day": dayTime
        })
      })

      if (response.status === 200) {
        toast.success("Recolha alterada com sucesso !")

        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else if (response.status === 503) {
        toast.error("Ocorreu um erro, tente novamente !")
      } else if (response.status === 401) {
        toast.error('O token é inválido!')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleEventDelete = async () => {
    setIsPopupOpen(false)
    
    const baseUrl = process.env.DEV_BASE_URL
    const url = baseUrl + 'waste-collection?id=' + eventId
    const token = localStorage.getItem('jwtToken')

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.status === 204) {
        toast.success("Recolha eliminada com sucesso !")

        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else if (response.status === 503) {
        toast.error("Ocorreu um erro, tente novamente !")
      } else if (response.status === 401) {
        toast.error('O token é inválido!')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDataSet = (arg: DatesSetArg) => {
      const month = arg.view.currentStart.getMonth()
      onMonthChange(month)
  }

  const eventContent = ({ event }: { event: any }) => {
      return (
          <div
          className={`shadow-black hover:shadow h-3`}
          style={{ backgroundColor: event.color }}
        ></div>
      )
    }

  const handleEventClick = (event: any) => {
    if (event.event.id) {
      setEventId(event.event.id)
      setIsPopupOpen(true)
    }
  }

  return (
    <div className='px-0 '>
      <div>
        {(isPopupOpen && eventId.length > 1) ? (
          <CollectionsPopup onClose={handlePopupClose} onSave={handlePopupSave} onDestroy={handleEventDelete} modify={true} id={eventId}/>
        ) : null}
      </div>
      <FullCalendar 
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          events={convertedEvents}
          eventContent={eventContent}
          datesSet={handleDataSet}
          fixedWeekCount={true}
          eventClick={handleEventClick}/>
      <ToastContainer />
    </div>
  )
}

export default SchedulesCalendar