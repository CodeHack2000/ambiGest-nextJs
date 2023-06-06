import Header from "@/components/Header";
import InvoicesCard from "@/components/InvoicesCard";
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { FC } from "react";
// changed
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
                <InvoicesCard />
            </main>
        </div>
    )
}

export default page