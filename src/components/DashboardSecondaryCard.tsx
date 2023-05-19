import { FC } from 'react'
import DashboardSecondaryItem from '@/ui/DashboardSecondaryItem'

interface DashboardSecondaryCardProps {
  title: String
}

const DashboardSecondaryCard: FC<DashboardSecondaryCardProps> = ({title}) => {
  return (
    <div className='flex flex-col mx-2 px-4 pt-4 pb-1 shadow shadow-black rounded-lg w-fit my-2 select-none h-80'>
      <span className='font-semibold text-lg'>{title}</span>
      <div className='my-2 overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-6'>
        <DashboardSecondaryItem active={true} date="15 de Fevereiro" title="Recolha de Sobrantes" uri="" />
        <DashboardSecondaryItem active={false} date="25 de Fevereiro" title="Eletrodoméstico Antigo" uri="" />
        <DashboardSecondaryItem active={false} date="25 de Dezembro" title="Mobiliário Antigo" uri="" />
        <DashboardSecondaryItem active={false} date="30 de Dezembro" title="Mobiliário Antigo" uri="" />
        <DashboardSecondaryItem active={true} date="15 de Fevereiro" title="Recolha de Sobrantes" uri="" />
        <DashboardSecondaryItem active={false} date="25 de Fevereiro" title="Eletrodoméstico Antigo" uri="" />
        <DashboardSecondaryItem active={false} date="25 de Dezembro" title="Mobiliário Antigo" uri="" />
        <DashboardSecondaryItem active={false} date="30 de Dezembro" title="Mobiliário Antigo" uri="" />
      </div>
    </div>
  )
}

export default DashboardSecondaryCard