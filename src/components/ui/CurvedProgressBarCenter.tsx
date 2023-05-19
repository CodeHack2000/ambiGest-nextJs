'use client'

import React from 'react'
import { FC, useEffect, useState } from 'react'
import StarsComponent from '@/ui/StarsComponent'

interface CurvedProgressBarCenterProps {
  progress: Number
}

const CurvedProgressBarCenter: FC<CurvedProgressBarCenterProps> = ({progress}) => {
    const [progressText, setProgressText] = useState("")
    const [starsValue, setStarsValue] = useState(0)

    useEffect(() => {
        setStarsValue(Math.round(progress.valueOf() * 5 / 100))
    }, [progress])

    useEffect(() => {
        switch (starsValue) {
            case 0:
                setProgressText("Sem Classificação")
                break;

            case 1:
                setProgressText("Ruim")
                break;

            case 2:
                setProgressText("Bom")
                break;

            case 3:
                setProgressText("Muito Bom")
                break;

            case 4:
                setProgressText("Excelente")
                break;

            case 5:
                setProgressText("Perfeito")
                break;
        
            default:
                break;
        }
    }, [starsValue])

  return (
    <div className='flex flex-col items-center'>
        <span className='text-4xl font-semibold pb-1'>{progress.toString()}%</span>
        <StarsComponent stars={starsValue} />
        <span className='font-semibold text-primary-dark pt-2'>{progressText}</span>
    </div>
  )
}

export default CurvedProgressBarCenter