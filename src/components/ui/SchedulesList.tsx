import dayjs from 'dayjs'
import { FC } from 'react'

interface SchedulesListProps {
  events: SchedulesDatasetType[]
}

const SchedulesList: FC<SchedulesListProps> = ({events}) => {
  return (
    <div className='overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 h-40'>
        <ul className='ml-8 mb-2 mt-1 mr-4'>
            {events.map((event) => (
                <li className='flex items-center' key={`${event.type}-${event.color}`}>
                    <div className='w-3 h-3 rounded-full' style={{backgroundColor: event.color}}></div>
                    <span className=' font-semibold mx-2 my-1'>{dayjs(event.pickup_at).date()}</span>
                    <span className='ml-1'>{event.type}</span>
                    <span className='ml-2'>: {event.time_of_day}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SchedulesList