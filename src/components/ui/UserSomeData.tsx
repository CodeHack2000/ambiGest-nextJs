import Link from 'next/link'
import { FC } from 'react'

interface UserSomeDataProps {
  username: String
}

const UserSomeData: FC<UserSomeDataProps> = ({username}) => {
  return (
    <div className='flex flex-col items-center py-4'>
        {/* PRECISAMOS DE PENSAR COMO RECEBER OS DADOS DO UTILIZADOR */}
        <span className='font-semibold text-lg'>Meu Perfil</span>
        <div className='w-32 rounded-3xl shadow shadow-black my-4'>
            <img
            src='/images/avatar.svg'/>
        </div>
        <span className='font-semibold'>{username}</span>
        <div className='flex items-center'>
            <Link href="#" className='p-1 mr-2 outlineButton'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </Link>
            <Link href="#" className='my-4 w-32 py-2 text-xs outlineButton'>Ver perfil completo</Link>
        </div>
    </div>
  )
}

export default UserSomeData