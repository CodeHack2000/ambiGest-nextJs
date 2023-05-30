import { FC } from 'react'

interface ReadingsHeaderProps {
    variation: number
    monthValue: number
    increase: number
}

const ReadingsHeader: FC<ReadingsHeaderProps> = ({variation = 9, monthValue = 13, increase = -5}) => {
  return (
    <div className='flex justify-evenly w-full mt-2 mb-4'>
        <div className='flex flex-col items-center'>
            <span className='text-xs'>Variação</span>
            <span className='text-sm'>{variation} %</span>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-xs'>Este mês</span>
            <span className='text-sm'>{monthValue} m³</span>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-xs'>Aumento</span>
            <span className='text-sm'>{increase} %</span>
        </div>
    </div>
  )
}

export default ReadingsHeader