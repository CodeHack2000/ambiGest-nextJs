import Link from 'next/link'
import { FC } from 'react'
import UserBasicInfo from '@/ui/UserBasicInfo'

interface UserSomeDataProps {
  username: String
}

const UserSomeData: FC<UserSomeDataProps> = ({username}) => {
  return (
    <div className='flex flex-col items-center py-4'>
        <UserBasicInfo username={username} />
        <div className='flex items-center'>
            <Link href="/user" className='my-4 w-32 py-2 text-xs outlineButton'>Ver perfil completo</Link>
        </div>
    </div>
  )
}

export default UserSomeData