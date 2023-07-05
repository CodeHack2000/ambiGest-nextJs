import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import SchedulesCard from "@/components/SchedulesCard";
import { FC } from "react";

const page: FC = () => {
    // DADOS TESTE
    const eventsInput = [
        {title: "Recolha de Electro", date: "2023-05-01", time: "09:30"},
        {title: "Recolha de Mobiliário", date: "2023-05-15", time: "14:30"},
        {title: "Data limite de pagamento", date: "2023-05-30", time: ""},
        {title: "Recolha de Comandos", date: "2023-05-02", time: ""},
        {title: "Recolha de Electro", date: "2023-05-05", time: "09:30"},
        {title: "Recolha de Mobiliário", date: "2023-05-06", time: "14:30"},
        {title: "Data limite de pagamento", date: "2023-05-08", time: ""},
        {title: "Recolha de Comandos", date: "2023-05-22", time: ""},
        {title: "Recolha de Electro", date: "2023-05-26", time: "09:30"},
        {title: "Recolha de Mobiliário", date: "2023-05-09", time: "14:30"},
        {title: "Data limite de pagamento", date: "2023-05-31", time: ""},
        {title: "Recolha de Comandos", date: "2023-05-31", time: ""},
        {title: "Recolha de Mobiliário", date: "2023-06-09", time: "14:30"},
        {title: "Data limite de pagamento", date: "2023-06-30", time: ""},
        {title: "Recolha de Comandos", date: "2023-06-30", time: ""}
    ]

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
                {/**PRECISA DE RECEBER A LISTA DE EVENTOS/AGENDAMENTOS DO UTILIZADOR */}
                <SchedulesCard events={eventsInput}/>
            </main>
        </div>
    )
}

export default page