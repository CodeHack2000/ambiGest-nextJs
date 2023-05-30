import Link from 'next/link'
import { FC } from 'react'

interface UserSomeDataProps {
  username: String
}

const UserSomeData: FC<UserSomeDataProps> = ({username}) => {
  return (
    <div className='flex flex-col items-center py-4'>
        {/* PENSAR COMO RECEBER OS DADOS DO UTILIZADOR */}
        <span className='font-semibold text-lg'>Meu Perfil</span>
        <div className='w-32 rounded-3xl shadow shadow-black my-4'>
            <img
            src='/images/avatar.svg'/>
        </div>
        <span className='font-semibold'>{username}</span>
        <div className='flex items-center'>
            <Link href="#" className='p-1 mr-2 outlineButton'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </Link>
            <Link href="#" className='my-4 w-32 py-2 text-xs outlineButton'>Ver perfil completo</Link>
        </div>
    </div>
  )
}

export default UserSomeData