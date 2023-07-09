'use client'

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import SchedulesCard from "@/components/SchedulesCard";
import { FC, useEffect, useState } from "react";
import getUserFromBackend from "@/helpers/getUserFromBackend"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

const Page: FC = () => {
    const router = useRouter()
    const [schedulesDataset, setSchedulesDataset] = useState<SchedulesDatasetType[]>([])
    const [finishedDataset, setFinishedDataset] = useState(false)

    useEffect(() => {
        const getSchedules = async () => {
            try {
                const baseUrl = process.env.DEV_BASE_URL
                const url = baseUrl + 'waste-collection'
                const token = localStorage.getItem('jwtToken')

                toast.loading('Carregando as recolhas...')

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    const data = await response.json()
                    const newDataset: SchedulesDatasetType[] = data.map((item: any) => ({
                        type: item.type,
                        latitude: item.latitude,
                        longitude: item.longitude,
                        pickup_at: item.pickup_at,
                        time_of_day: item.time_of_day,
                        id: item._id,
                        color: ""
                    }))
                    toast.dismiss()

                    setSchedulesDataset(newDataset)
                    setFinishedDataset(true)
                } else if (response.status === 401) {
                    toast.error("O token é inválido!")
                    router.push('/')
                }
            } catch(error) {
                console.log('Error: ', error)
            }
        }

        const getUser = async () => {
            const user = await getUserFromBackend()
            if (user === "") {
              localStorage.clear()
              router.push('/login')
            } else {
                await getSchedules()
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
                {finishedDataset ? (
                    <SchedulesCard events={schedulesDataset}/>
                ) : null}
                <ToastContainer />
            </main>
        </div>
    )
}

export default Page