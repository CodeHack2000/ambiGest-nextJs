'use client'

import React, { useEffect, useState } from 'react'
import SchedulesCalendar from '@/ui/SchedulesCalendar'
import SchedulesListCard from '@/ui/SchedulesListCard'
import dayjs from 'dayjs'
import randomColor from 'randomcolor'
import { FC } from 'react'
import GreenBtn from '@/ui/GreenBtn'
import Link from 'next/link'

interface EventAuxType {
    title: string
    date: string
    time: string
}

interface SchedulesCardProps {
  events: EventAuxType[]
}

// PRECISA DE RECEBER UMA LISTA DE EVENTOS/AGENDAMENTOS DO UTILIZADOR E CRIAR UMA NOVA LISTA DE AGENDAMENTOS ONDE É ATRIBUÍDA UMA COR PARA CADA EVENTO NO MêS SELECIONADO
const SchedulesCard: FC<SchedulesCardProps> = ({events}) => {
    const [filteredEvents, setFilteredEvents] = useState<EventType[]>([])
    const [colorsList, setColorsList] = useState<string[]>([])

    useEffect(() => {
        const generateEventColor = async () => {
            const ranColor = await randomColor({
                luminosity: 'dark', 
                count: 120,
                format: 'rgba'
            })

            setColorsList(ranColor)
        }
      
        generateEventColor()
    }, [])

    useEffect(() => {
        const generateFilteredEvents = async () => {
            const currentDate = new Date()
            const filteredAux = events.filter((event) => dayjs(event.date).get('month') === currentDate.getMonth())
    
            const filtered = filteredAux.map((event, index) => ({...event, color: colorsList[index+1]}))
            
            filtered.sort((event_a, event_b) =>
                dayjs(event_a.date)
                .date()
                .toString()
                .localeCompare(dayjs(event_b.date).date().toString(), 'en', { numeric: true })
            )
    
            setFilteredEvents(filtered)
        }

        generateFilteredEvents()
    }, [colorsList])
    
    const onMonthChange = async (month: number) => {
        const generateFilteredEvents = async () => {
            const filteredAux = events.filter((event) => dayjs(event.date).get('month') === month)
    
            const filtered = filteredAux.map((event, index) => ({...event, color: colorsList[index+1]}))
            
            filtered.sort((event_a, event_b) =>
                dayjs(event_a.date)
                .date()
                .toString()
                .localeCompare(dayjs(event_b.date).date().toString(), 'en', { numeric: true })
            )
        
            setFilteredEvents(filtered)
        };
    
        await generateFilteredEvents()
    }

  return (
    <div className='bigCard'>
        <div className='flex justify-between items-center'>
            <span className='font-bold text-xl'>Agendamentos</span>
            <Link href="schedules/collections"><GreenBtn text='Nova Recolha' props='px-2' margin={true}/></Link>
        </div>
        <div className='h-full'>
            <SchedulesCalendar events={filteredEvents} onMonthChange={onMonthChange} />
        </div>
        <SchedulesListCard events={filteredEvents} />
    </div>
  )
}

export default SchedulesCard
