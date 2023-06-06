import { FC } from 'react'
import UserSomeData from '@/ui/UserSomeData'
import DashboardGraphic from '@/ui/DashboardGraphic'

// changed
interface DashboardMainCardProps {
  username: String
}

const DashboardMainCard: FC<DashboardMainCardProps> = ({username}) => {
  return (
    <div className='mx-2 shadow shadow-black rounded-xl flex justify-evenly px-4 items-center customMainCardScreen'>
          <UserSomeData username={username} />
        <div className='my-10 ml-2'>
            <DashboardGraphic progress={35} spent={-0.3} />
        </div>
    </div>
  )
}

export default DashboardMainCard