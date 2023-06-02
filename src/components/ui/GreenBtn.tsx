import { FC } from 'react'

interface GreenBtnProps {
  text: string
  props?: string
  margin: boolean
  action?: () => void
}

const GreenBtn: FC<GreenBtnProps> = ({text, props, margin, action}) => {
  return <button type='button' onClick={action ? action : undefined} className={`${margin ? ('greenBtn') : ('greenBtnMarginOff')} ${props ? (props) : ''}`}>{text}</button>
}

export default GreenBtn