import { FC } from 'react'

interface DashboardSecondaryCardProps {
  title: string,
  value: string,
  props: string
}

const DashboardSecondaryCard: FC<DashboardSecondaryCardProps> = ({title, value, props}) => {
  return (
    <div className='flex flex-col mx-2 px-4 pt-4 pb-1 shadow shadow-black rounded-lg w-fit my-2 select-none h-36'>
      <span className='font-semibold text-lg'>{title}</span>
      <div className='flex justify-center my-4'>
        <span className={`${props} font-bold`}>{value}</span>
      </div>
    </div>
  )
}

export default DashboardSecondaryCard