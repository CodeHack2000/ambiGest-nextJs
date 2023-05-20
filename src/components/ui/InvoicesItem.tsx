import { FC } from 'react'
import InvoicesInfoItem from '@/ui/InvoicesInfoItem'
import InvoicesGraphic from '@/ui/InvoicesGraphic'

interface InvoicesItemProps {
  month: string
  spent: number
  increase: number
  total: number
}

const InvoicesItem: FC<InvoicesItemProps> = ({month, spent, increase, total}) => {
  return (
    <div className='bg-blueCard text-white flex flex-col w-full xs:w-3/4 md:w-5/6 mb-3 rounded-lg py-3 px-4 shadow shadow-black'>
          <span className='font-semibold text-center'>{month}</span>
        <div className='flex justify-evenly w-full mt-5'>
            <div className='w-1/2 relative'>
                <div className='w-5 h-5 scale-50 absolute' style={{top: "-4.4rem", right: "7.5rem"}}>
                  <InvoicesGraphic progress={spent} increase={increase} />
                </div>
            </div>
            <div className='w-2/3'>
                <InvoicesInfoItem title="Consumo" value={spent} />
                <InvoicesInfoItem title="Aumento" value={increase} />
                <InvoicesInfoItem title="Total" value={total} />
              </div>
        </div>
    </div>
  )
}

export default InvoicesItem