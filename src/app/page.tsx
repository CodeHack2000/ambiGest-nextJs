'use client'

import DashboardMainCard from "@/components/DashboardMainCard";
import DashboardSecondaryCard from "@/components/DashboardSecondaryCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUserFromBackend from "@/helpers/getUserFromBackend"
import getSchedulesStatistic from "@/helpers/getSchedulesStatistic";
import getWaterBillStatistic from "@/helpers/getWaterBillStatistic";
import getBackendStatistic from "@/helpers/getBackendStatistic";

export default function Home() {
  const [username, setUsername] = useState("Tester")
  const [totalSchedules, setTotalSchedules] = useState(0)
  const [totalMoneyInvoices, setTotalMoneyInvoices] = useState(0)
  const [mostSchedulesMonth, setMostSchedulesMonth] = useState("")
  const [mostScheduledType, setMostScheduledType] = useState("")
  const [consumeLastMonth, setConsumeLastMonth] = useState(0)
  const [economyPercent, setEconomyPercent] = useState(0)
  const [totalConsume, setTotalConsume] = useState(0)
  const [bigestBillMonth, setBigestBillMonth] = useState("")

  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserFromBackend()
      if (user === "") {
        localStorage.clear()
        router.push('/login')
      } else {
        setUsername(user)
        const schedulesStastistics = await getSchedulesStatistic()
        if (schedulesStastistics && !schedulesStastistics.error) {
          setTotalSchedules(schedulesStastistics.totalSchedules)
          setMostScheduledType(schedulesStastistics.mostScheduledType)
          setMostSchedulesMonth(schedulesStastistics.mostSchedulesMonth)
        } 

        const waterBillStatistics = await getWaterBillStatistic()
        if (waterBillStatistics && !waterBillStatistics.error) {
          setTotalMoneyInvoices(waterBillStatistics.totalMoney)
          setBigestBillMonth(waterBillStatistics.bigestPayMonth)
        }

        const backendStatistics = await getBackendStatistic()
        if (backendStatistics && !backendStatistics.error) {
          setConsumeLastMonth(backendStatistics.consume_last_month)
          setEconomyPercent(backendStatistics.economy_percent)
          setTotalConsume(backendStatistics.total_consume)
        }
      }
    }

    if (!localStorage.getItem('jwtToken')) {
      router.push('/login')
    } else {
      getUser()
    }
  }, [])

  return (
    <div className="select-none">
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
      <main className="customMd:dashMarginX flex flex-col items-center pb-10">
        <div className="my-6">
          <span className="font-semibold">Olá, </span>{username}
        </div>
        <div className="w-full flex justify-center">
          <DashboardMainCard username={username} consumeLastMount={consumeLastMonth} economyPercent={economyPercent} />
        </div>
        <div className="flex justify-center mx-2 xs:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12 w-full">
            <DashboardSecondaryCard title="Mês com mais Recolhas" value={mostSchedulesMonth} props="text-6xl"/>
            <DashboardSecondaryCard title="Maior Tipo de Recolhas" value={mostScheduledType} props="text-6xl"/>
            <DashboardSecondaryCard title="Total Gasto em Faturas" value={totalMoneyInvoices + " €"} props="text-6xl"/>
            <DashboardSecondaryCard title="Consumo Total de Água" value={totalConsume + ' m3'} props="text-6xl"/>
            <DashboardSecondaryCard title="Total Recolhas" value={totalSchedules.toString()} props="text-6xl"/>
            <DashboardSecondaryCard title="Maior Fatura" value={bigestBillMonth} props="text-4xl"/>
          </div>
        </div>
      </main>
    </div>
  )
}
