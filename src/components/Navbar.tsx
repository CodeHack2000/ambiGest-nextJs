import Link from 'next/link'
import React from 'react'
// changed
export default function Navbar() {
  return (
    <div className='w-full h-9 bg-primary-dark shadow-sm shadow-black flex justify-evenly items-center pt-1 px-32' >
        <Link href="#" className='navbarItem'>
            Recolhas
        </Link>
        <Link href="/invoices" className='navbarItem'>
            Faturação
        </Link>
        <Link href="#" className='navbarItem'>
            Agenda
        </Link>
        <Link href="#" className='navbarItem'>
            Leituras
        </Link>
    </div>
  )
}
