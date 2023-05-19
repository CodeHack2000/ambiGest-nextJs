import ForgotPasswordCard from '@/components/ForgotPasswordCard'
import Header from '@/components/Header'
import NavbarSmall from '@/components/NavbarSmall'
import {FC} from 'react'

const page: FC = () => {
    return (
        <div>
            <header className='hidden customMd:inline'>
                <Header isUsedLogged={false} />
            </header>
            <nav className="customMd:hidden sticky top-0 z-10">
                <NavbarSmall isUserLogged={false} />
            </nav>
            <main className='mb-10'>
                <div className='flex justify-center mt-20'>
                    <ForgotPasswordCard />
                </div>
            </main>
        </div>
    )
}

export default page