import { FC } from 'react'

interface GreenBtnProps {
  text: string
  props?: string
}

const GreenBtn: FC<GreenBtnProps> = ({text, props}) => {
  return <button type='button' className={`greenBtn ${props ? (props) : ''}`}>{text}</button>
}

export default GreenBtn