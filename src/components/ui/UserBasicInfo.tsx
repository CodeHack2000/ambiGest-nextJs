import { FC } from 'react'

interface UserBasicInfoProps {
  username: String
}

const UserBasicInfo: FC<UserBasicInfoProps> = ({username}) => {
  return (
    <>
        <span className='font-semibold text-lg'>Meu Perfil</span>
        <div className='w-32 rounded-3xl shadow shadow-black my-4'>
            <img
            src='/images/avatar.svg'/>
        </div>
        <span className='font-semibold'>{username}</span>
    </>
  )
}

export default UserBasicInfo