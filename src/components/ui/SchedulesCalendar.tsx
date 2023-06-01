'use client'

import { FC } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DatesSetArg } from '@fullcalendar/core'


interface SchedulesCalendarProps {
  events: EventType[]
  onMonthChange: (month: number) => void
}

const SchedulesCalendar: FC<SchedulesCalendarProps> = ({events, onMonthChange}) => {
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

  return (
    <div className='px-0 '>
        <FullCalendar 
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={events}
            eventContent={eventContent}
            datesSet={handleDataSet}
            fixedWeekCount={true}/>
    </div>
  )
}

export default SchedulesCalendar