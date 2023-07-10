import { FC } from 'react'
import UserSomeData from '@/ui/UserSomeData'
import DashboardGraphic from '@/ui/DashboardGraphic'

interface DashboardMainCardProps {
  username: string
  consumeLastMount: number
  economyPercent: number
}

const DashboardMainCard: FC<DashboardMainCardProps> = ({username, economyPercent, consumeLastMount}) => {
  return (
    <div className='mainCard xs:flex-row xs:mx-2 justify-evenly'>
          <UserSomeData username={username} />
        <div className='mt-2 mb-6 xs:my-10 ml-2'>
            <DashboardGraphic progress={economyPercent} spent={consumeLastMount} />
        </div>
    </div>
  )
}

export default DashboardMainCard