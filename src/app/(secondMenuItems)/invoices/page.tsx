'use client'

import Header from "@/components/Header";
import InvoicesCard from "@/components/InvoicesCard";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getUserFromBackend from "@/helpers/getUserFromBackend"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page: FC = () => {
    const router = useRouter()
    const [constractValue, setContractValue] = useState(0)
    const [contractExists, setContractExists] = useState(false)
    const [pickedContract, setPickedContract] = useState(false)

    useEffect(() => {
        const getUserContract = async () => {
            try {
                const baseUrl = process.env.DEV_BASE_URL
                const url = baseUrl + 'water-contract'
                const token = localStorage.getItem('jwtToken')

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.status === 404) {
                    toast.warning("O utilizador não possui um contrato.")
                } else if (response.status === 401) {
                    toast.error("O token é inválido!")
                    router.push('/')
                } else if (response.status === 200) {
                    const data = await response.json()
                    setContractValue(data.value_per_m3)
                    setContractExists(true)
                }
                setPickedContract(true)
            } catch (error) {
                console.log('Error: ', error)
            }
        }

        const getUser = async () => {
          const user = await getUserFromBackend()
          if (user === "") {
            localStorage.clear()
            router.push('/login')
          } else {
            getUserContract()
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
            <main className="flex justify-center mb-10 mt-10">
                {pickedContract ? (
                    <InvoicesCard pricePerM3={constractValue} contractExists={contractExists}/>
                ) : null}
                <ToastContainer />
            </main>
        </div>
    )
}

export default Page