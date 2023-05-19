import { FC } from 'react'
import UserSomeData from '@/ui/UserSomeData'
import DashboardGraphic from '@/ui/DashboardGraphic'

interface DashboardMainCardProps {
  username: String
}

const DashboardMainCard: FC<DashboardMainCardProps> = ({username}) => {
  return (
    <div className='w-full mx-2 shadow shadow-black rounded-xl flex justify-evenly px-4 customMd:w-2/3 lg:w-3/4 xl:w-3/5 items-center sm:w-3/4'>
          <UserSomeData username={username} />
        <div className='my-10 ml-2'>
            <DashboardGraphic progress={35} spent={-0.3} />
        </div>
    </div>
  )
}

export default DashboardMainCard