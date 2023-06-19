import { FC } from 'react'
import UserSomeData from '@/ui/UserSomeData'
import DashboardGraphic from '@/ui/DashboardGraphic'

interface DashboardMainCardProps {
  username: String
}

const DashboardMainCard: FC<DashboardMainCardProps> = ({username}) => {
  return (
    <div className='mainCard xs:flex-row xs:mx-2 justify-evenly'>
          <UserSomeData username={username} />
        <div className='mt-2 mb-6 xs:my-10 ml-2'>
            <DashboardGraphic progress={35} spent={-0.3} />
        </div>
    </div>
  )
}

export default DashboardMainCard