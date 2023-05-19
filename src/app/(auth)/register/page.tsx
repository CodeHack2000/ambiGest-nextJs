import Header from '@/components/Header'
import NavbarSmall from '@/components/NavbarSmall'
import RegisterCard from '@/components/RegisterCard'
import Link from 'next/link'
import {FC} from 'react'

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
                <div className='flex text-sm justify-end mr-8 mt-4 lg:mr-20'>
                    <span>Já possui conta?</span>
                    <Link href="/login" className='font-semibold ml-3 flex items-center'>
                        Entrar
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </Link>
                </div>
                <div className='flex justify-center mt-6'>
                    <RegisterCard />
                </div>
                <div className='flex justify-center mt-8 mx-8'>
                    <div className='textExtraSmall customMd:w-1/2 font-semibold lg:w-2/5'>
                        Ao criar uma conta, você concorda com os <span className='text-primary-dark'>Termos de Serviço</span>. Para obter mais informações sobre a práticas de privacidade do ambiGest, consulte a <span className='text-primary-dark'>Declaração de Privacidade do ambiGest</span>.
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page