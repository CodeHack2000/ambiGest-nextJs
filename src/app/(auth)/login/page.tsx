import Header from '@/components/Header'
import LoginCard from '@/components/LoginCard'
import NavbarSmall from '@/components/NavbarSmall'
import Link from 'next/link'
import {FC} from 'react'

// changed
const page: FC = () => {
    return (
        <div>
            <header className='hidden customMd:inline'>
                <Header isUsedLogged={false} />
            </header>
            <nav  className="customMd:hidden sticky top-0 z-10">
                <NavbarSmall isUserLogged={false} />
            </nav>
            <main className='mb-10'>
                <div className='flex justify-center mt-16'>
                    <LoginCard />
                </div>
                <div className='flex justify-center mt-8 sm:mx-0 mx-8'>
                    <div className='flex justify-center text-sm font-semibold shadow-md shadow-black rounded-xl py-4 customAuthCardScreen'>
                        <span className='opacity-75'>Novo no ambiGest?</span>
                        <Link href="/register" className='ml-2 font-bold'>Crie uma conta.</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page