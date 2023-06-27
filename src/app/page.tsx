'use client'

import DashboardMainCard from "@/components/DashboardMainCard";
import DashboardSecondaryCard from "@/components/DashboardSecondaryCard";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // Need to get username from backend
  const [username, setUsername] = useState("Tester")
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('jwtToken'))
      router.push('/login')
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
          <DashboardMainCard username={username} />
        </div>
        <div className="flex justify-center mx-2 xs:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12 w-full">
            <DashboardSecondaryCard title="Meus Pedidos" />
            <DashboardSecondaryCard title="Leituras" />
            <DashboardSecondaryCard title="Vantagens" />
          </div>
        </div>
      </main>
    </div>
  )
}
