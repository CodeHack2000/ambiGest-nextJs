import { FC } from 'react'
import GreenBtn from './GreenBtn'

interface InvoicesContractDataProps {
  pricePerM3: number
  action: () => void
}

const InvoicesContractData: FC<InvoicesContractDataProps> = ({pricePerM3, action}) => {
  return (
    <div className='w-full flex justify-evenly my-4'>
        <span className='text-lg'>{pricePerM3} € por m3</span>
        {pricePerM3 === 0 ? (
            <GreenBtn text='Criar Contrato' margin={false} props='px-2' action={action}/>
        ) : (
            <GreenBtn text='Alterar Contrato' margin={false} props='px-2' action={action}/>
        )}
    </div>
  )
}

export default InvoicesContractData