import { FC } from 'react'
import {Map, Marker} from 'pigeon-maps'


interface CollectionMapProps {
  center: [number, number]
}

const CollectionMap: FC<CollectionMapProps> = ({center}) => {
  return (
    <Map center={center} zoom={13} width={400} height={300}>
      <Marker anchor={center} payload={1} />
    </Map>
  )
}

export default CollectionMap