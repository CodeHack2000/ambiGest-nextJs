import { FC } from 'react'
import InvoicesItem from '@/ui/InvoicesItem'

interface InvoicesCardProps {
  
}

const InvoicesCard: FC<InvoicesCardProps> = ({}) => {
  return (
    <div className='mediumCard xs:h-card h-full'>
        <span className='font-bold mt-6 text-xl mb-2'>As minhas faturas</span>
        <div className='my-2 overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full flex flex-col items-center'>
            <InvoicesItem month="Janeiro" spent={16.2} increase={-0.5} total={22.90} />
            <InvoicesItem month="Dezembro" spent={16.7} increase={1.7} total={23.10} />
            <InvoicesItem month="Novembro" spent={15.0} increase={-0.3} total={22.00} />
            <InvoicesItem month="Janeiro" spent={16.2} increase={-0.5} total={22.90} />
            <InvoicesItem month="Dezembro" spent={16.7} increase={1.7} total={23.10} />
            <InvoicesItem month="Novembro" spent={15.0} increase={-0.3} total={22.00} />
            <InvoicesItem month="Janeiro" spent={16.2} increase={-0.5} total={22.90} />
            <InvoicesItem month="Dezembro" spent={16.7} increase={1.7} total={23.10} />
            <InvoicesItem month="Novembro" spent={15.0} increase={-0.3} total={22.00} />
        </div>
    </div>
  )
}

export default InvoicesCard