'use client'

import { FC } from 'react'

interface StarsComponentProps {
  stars: Number
}

const StarsComponent: FC<StarsComponentProps> = ({stars}) => {
    const elements = []

    for (let i = 1; i <= 5; i++) {
        if (i <= stars.valueOf() && stars.valueOf() > 0) {
            elements.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#F2D03C" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>)
        } else {
            elements.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#CBCBC5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-customGray">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>)
        }
    }

  return (
    <div className='flex justify-center'>
        {elements}
    </div>
  )
}

export default StarsComponent