import { FC } from 'react'
import ReadingsGraphic from './ui/ReadingsGraphic'
import ReadingItem from './ui/ReadingItem'
import ReadingsHeader from './ui/ReadingsHeader'
import ReadingsManage from './ui/ReadingsManage'

interface ReadingsCardProps {
  nextReadingDate: string
  variation: number
  monthValue: number
  increase: number
}

const ReadingsCard: FC<ReadingsCardProps> = ({nextReadingDate = "01 de Fevereiro", variation = 9, monthValue = 13, increase = -5}) => {
    const dataset: ReadingsGraphicDataType[] = [
        {name: "8", consumo: 13},
        {name: "9", consumo: 14.3},
        {name: "10", consumo: 13.6},
        {name: "11", consumo: 15},
        {name: "12", consumo: 17},
        {name: "1", consumo: 14.1},
    ]

  return (
    <div className='mediumCard xs:h-card' style={{height: "40rem"}}>
        <span className='font-bold mt-6 text-xl mb-4'>As minhas leituras</span>
        <ReadingsHeader increase={increase} monthValue={monthValue} variation={variation} />
        <div className='h-2/5 w-full mb-4'>
            <ReadingsGraphic dataset={dataset} />
        </div>
        <ReadingsManage nextReadingDate={nextReadingDate} />
        <div className='my-4 px-1 pb-2 overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full flex flex-col items-center'>
            <ReadingItem month='Dezembro' value={51654} />
            <ReadingItem month='Novembro' value={51637} />
            <ReadingItem month='Outubro' value={51624} />
            <ReadingItem month='Setembro' value={51654} />
            <ReadingItem month='Agosto' value={51637} />
        </div>
    </div>
  )
}

export default ReadingsCard