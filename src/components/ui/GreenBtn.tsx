import { FC } from 'react'

interface GreenBtnProps {
  text: string
  props?: string
  action?: () => void
}

const GreenBtn: FC<GreenBtnProps> = ({text, props, action}) => {
  return <button type='button' onClick={action ? action : undefined} className={`greenBtn ${props ? (props) : ''}`}>{text}</button>
}

export default GreenBtn