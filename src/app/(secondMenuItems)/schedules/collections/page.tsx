'use client'

import CollectionsCard from "@/components/CollectionsCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import getUserFromBackend from "@/helpers/getUserFromBackend"

const Page: FC = () => {
    const router = useRouter()

    useEffect(() => {
        const getUser = async () => {
            const user = await getUserFromBackend()
            if (user === "") {
              localStorage.clear()
              router.push('/login')
            } 
        }
      
        if (!localStorage.getItem('jwtToken')) {
            router.push('/login')
        } else {
            getUser()
        } 
    }, [])

    return (
        <div>
            <header className="hidden customMd:inline">
                <Header isUsedLogged={true} />
            </header>
            <nav className="sticky top-0 z-10">
                <div className="hidden customMd:inline">
                    <Navbar />
                </div>
                <div className="customMd:hidden">
                    <NavbarSmall isUserLogged={true} />
                </div>
            </nav>
            <main className="flex justify-center mb-10 mt-6">
                <CollectionsCard />
            </main>
        </div>
    )
}

export default Page