'use client'

import { FC, useEffect, useState } from 'react'
import { Cell, Pie, PieChart, Label } from 'recharts';

interface InvoicesGraphicProps {
  progress: number,
  increase: number
}

const InvoicesGraphic: FC<InvoicesGraphicProps> = ({progress = 0, increase = 0}) => {
    const [isClient, setIsClient] = useState(false)
    const [colors, setColors] = useState<string[]>([])

    const data = [
      {name: "1", value: 134},
      {name: "2", value: progress}
    ]

    useEffect(() => {
      setIsClient(true)

      if (increase <= 0)
        setColors(["#71C4C3", "#3BED04"])
      else
        setColors(["#71C4C3", "#EE6E59"])
    }, [increase])

  return isClient ? (
    <PieChart width={250} height={290}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <text
        x={125}
        y={195}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFF"
        fontSize={35}
        fontWeight="bold"
      >
        {progress}
      </text>
      <text
        x={127}
        y={232}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFF"
        fontSize={25}
      >
        m³
      </text>
  </PieChart>
  ) : null
}

export default InvoicesGraphic