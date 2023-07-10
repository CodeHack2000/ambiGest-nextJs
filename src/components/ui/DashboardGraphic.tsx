import { FC } from 'react'
import CurvedProgressBar from '@/ui/CurvedProgressBar'

interface DashboardGraphicProps {
    progress: Number
    spent: Number
}

const DashboardGraphic: FC<DashboardGraphicProps> = ({progress, spent}) => {
  return (
    <div className='relative flex flex-col items-center' style={{zIndex: 0}}>
        <CurvedProgressBar progress={progress} />
        <div className='flex flex-col items-center text-sm bg-slate-200 rounded-lg pb-2 pt-6 px-6'>
            <span>Parabéns!</span>
            <span className='mb-2'>Estamos no bom caminho!</span>
            <span className='text-xs text-teal-500 font-semibold'>Como poupar água em casa</span>
        </div>
        <div className='shadow shadow-black rounded-xl flex flex-col items-center py-1 text-sm w-fit px-4 ml-8 absolute top-40 right-11 bg-white'>
            <span className='text-slate-600 opacity-80 font-semibold'>Últimos 30 dias</span>
            {spent.valueOf() > 0 ? (
                <span className='text-red-500 font-bold'>{spent.toString()}</span>
            ) : (
                <span className='text-primary-dark font-bold'>{spent.toString()}</span>
            )}
        </div>
    </div>
  )
}

export default DashboardGraphic