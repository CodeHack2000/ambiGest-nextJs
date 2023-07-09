import { FC } from 'react'
import GreenBtn from './GreenBtn'

interface ReadingItemProps {
  month: string
  value: number
  id: string
  action: (id: string) => void
}

const ReadingItem: FC<ReadingItemProps> = ({month = "Dezembro", value = 51654, action, id}) => {
  return (
    <div className='w-full mx-2 px-8 py-2 mt-3 flex justify-between shadow-sm shadow-black rounded-xl items-center bg-customPurple opacity-75 group'>
        <span className='font-semibold group-hover:scale-110 transition-transform duration-300 ease-in-out select-none'>{month}</span>
        <span className='text-sm group-hover:scale-110 transition-transform duration-300 ease-in-out'>{value} m³</span>
        <GreenBtn margin={false} text='X' props='px-2' action={() => action(id)}/>
    </div>
  )
}

export default ReadingItem