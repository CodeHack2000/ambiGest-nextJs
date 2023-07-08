'use client'

import { FC, useEffect, useState} from 'react'
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface ReadingsGraphicProps {
  dataset: ReadingsDatasetType[]
}

const ReadingsGraphic: FC<ReadingsGraphicProps> = ({dataset = []}) => {
  const [newDataset, setNewDataset] = useState<ReadingsGraphicDataType[]>([])

    const customCSS = `
    .recharts-text.recharts-label {
      fill: #65B000;
      font-weight: 500;
    }

    .recharts-tooltip-item-value {
      color: #000000;
    }
  `;

  const tooltipFormatter = (value: any) => `${value} m³`;

  useEffect(() => {
    const transformedDataset = dataset.map(item => ({
      name: item.reading_date.substring(5, 7),
      consumo: item.amount
    }))

    setNewDataset(transformedDataset)
  }, [dataset])

  return (
    <>
        <style>{customCSS}</style>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={newDataset}
            margin={{
                top: 5,
                right: 5,
                left: 7,
                bottom: 5,
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke='#78B526'>
                <Label value="Mês" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis stroke='#78B526'>
                <Label value="m³" offset={0} position="insideLeft" angle={-90}/>
            </YAxis>
            <Tooltip formatter={tooltipFormatter} />
            <Line type="monotone" dataKey="consumo" stroke='#88A1E1' activeDot={{r: 8}} strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
    </>
  )
}

export default ReadingsGraphic