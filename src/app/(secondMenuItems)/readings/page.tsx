import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import ReadingsCard from "@/components/ReadingsCard";
import { FC } from "react";

const page: FC = () => {
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
                <ReadingsCard nextReadingDate="01 de Fevereiro" increase={-5} monthValue={13} variation={9} />
            </main>
        </div>
    )
}

export default page