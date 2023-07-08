'use client'

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import ReadingsCard from "@/components/ReadingsCard";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getUserFromBackend from "@/helpers/getUserFromBackend"
import dayjs from "dayjs";
import 'dayjs/locale/pt'

const Page: FC = () => {
    const router = useRouter()
    const [dataset, setDataset] = useState<ReadingsDatasetType[]>([])
    const [finishedDataset, setFinishedDataset] = useState(false)
    const [nextReadingDate, setNextReadingDate] = useState("")

    useEffect(() => {
        const getWaterReadings = async () => {
            try {
                const baseUrl = process.env.DEV_BASE_URL
                const url = baseUrl + 'water-readings'
                const token = localStorage.getItem('jwtToken')

                toast.loading("Carregando as leituras...")

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.status === 200) {
                    const data = await response.json()
                    const newDataset: ReadingsDatasetType[] = data.map((item: any) => ({
                        amount: item.amount,
                        reading_date: item.reading_date,
                        id: item._id
                      }))
                    toast.dismiss()

                    setDataset(newDataset)

                    if (newDataset.length > 0) {
                        const lastReadingDate = newDataset[newDataset.length - 1]?.reading_date
                        if (lastReadingDate) {
                            const nextDate = dayjs(lastReadingDate).add(1, 'month')
                            const formattedNextDate = nextDate.locale('pt').format('MMMM [de] YYYY')
                            setNextReadingDate(formattedNextDate)
                        }
                    }

                    setFinishedDataset(true)

                    if (newDataset.length < 1)
                        toast.info("Não existem leituras disponíveis.")
                } else if (response.status === 401) {
                    toast.error("O token é inválido!")
                    router.push('/')
                }
            } catch (error) {
                console.log('Error: ', error)
            }
        }

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
                    toast.warning("Primeiro é necessário adicionar um contrato!")

                    setTimeout(() => {
                        router.push('/invoices')
                    }, 4000)
                } else if (response.status === 200) {
                    await getWaterReadings()
                }
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
                await getUserContract()
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
                    <ReadingsCard nextReadingDate={nextReadingDate} dataset={dataset} />
                ) : null}
                <ToastContainer />
            </main>
        </div>
    )
}

export default Page