'use client'

import { FC, useState } from 'react'
import SchedulesList from '@/ui/SchedulesList'

interface SchedulesListCardProps {
  events: SchedulesDatasetType[]
}

const SchedulesListCard: FC<SchedulesListCardProps> = ({events}) => {
    const [isDetailsShowed, setIsDetailsShowed] = useState(false)

  return (
    <div className='absolute left-0 z-10 w-fit shadow-sm shadow-black'>
        {isDetailsShowed ? (
            <>
                <div className='w-full bg-primary-dark flex justify-center  opacity-80 cursor-pointer hover:opacity-90 transition-opacity duration-300 ease-in-out' onClick={() => setIsDetailsShowed(!isDetailsShowed)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className='bg-customGray h-44 flex items-center pr-4 opacity-80'>
                    {events.length > 0 ? (
                        <SchedulesList events={events} />
                    ) : (
                        <span className='pl-4 py-2'>Não existem agendamentos para este mês!</span>
                    )}
                </div>
            </>
        ) : (
            <div className='h-36 flex items-center bg-primary-dark cursor-pointer transitionReScale hover:opacity-90' onClick={() => setIsDetailsShowed(!isDetailsShowed)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        )}
    </div>
  )
}

export default SchedulesListCard