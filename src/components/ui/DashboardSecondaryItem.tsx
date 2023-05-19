import Link from 'next/link'
import { FC } from 'react'

interface DashboardSecondaryItemProps {
  title: String
  active: Boolean
  date: String
  uri: String
}

const DashboardSecondaryItem: FC<DashboardSecondaryItemProps> = ({title, active, date}) => {
  return (
    <div className='flex items-center w-full mt-4 justify-between select-none'>
        <div className='mr-5'>
            {active ? (
                <img 
                    src='/images/dashboardItem_active.svg'
                    className='w-20' />
            ) : (
                <img 
                    src='/images/dashboardItem_notActive.svg'
                    className='w-20'/>
            )}
        </div>
        <div className='flex flex-col w-full'>
            <span className='text-sm mb-1'>{title}</span>
            {active ? (
                <span className='text-primary-dark text-xs'>{date}</span>
            ) : (
                <span className='text-slate-400 text-xs'>{date}</span>
            )}
        </div>
        <Link href="#" className='ml-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-400 hover:text-primary-dark transition-all hover:scale-110 duration-300 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </Link>
    </div>
  )
}

export default DashboardSecondaryItem