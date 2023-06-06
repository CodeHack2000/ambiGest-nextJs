'use client'

import { FC, useEffect, useState } from 'react'

interface InvoicesInfoItemProps {
  title: String
  value: Number
}
//changed
const InvoicesInfoItem: FC<InvoicesInfoItemProps> = ({ title, value}) => {
    const [circleClass, setCircleClass] = useState("")
    const [valueClass, setValueClass] = useState("")

    useEffect(() => {
        switch (title) {
            case "Consumo":
                setCircleClass("bg-pizzaGraphic w-1 h-1 rounded-full mx-2 scale-150")
                break;
                
            case "Aumento":
                if (value.valueOf() <= 0) {
                    setCircleClass("bg-customGreen w-1 h-1 rounded-full mx-2 scale-150")
                    setValueClass("text-customGreen")
                } else {
                    setCircleClass("bg-customRed w-1 h-1 rounded-full mx-2 scale-150")
                    setValueClass("text-customRed")
                }
                break;
        
            default:
                setCircleClass("bg-customPurple w-1 h-1 rounded-full mx-2 scale-150")
                break;
        }
    }, [title])

  return (
    <div className='flex justify-between text-sm mb-2'>
        <div className='flex items-center'>
            <div className={circleClass}></div>
            <span className='text-white'>{title}</span>
        </div>
        {title === "Total" ? (
            <span>{value.toString()}€</span>
        ) : (
            <span className={valueClass}>{value.toString()} m3</span>
        )}
    </div>
  )
}

export default InvoicesInfoItem