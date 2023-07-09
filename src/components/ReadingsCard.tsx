import { FC } from 'react'
import ReadingsGraphic from '@/ui/ReadingsGraphic'
import ReadingItem from '@/ui/ReadingItem'
import ReadingsManage from '@/ui/ReadingsManage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

interface ReadingsCardProps {
  nextReadingDate: string
  dataset: ReadingsDatasetType[]
}

const ReadingsCard: FC<ReadingsCardProps> = ({nextReadingDate = "01 de Fevereiro", dataset}) => {
  const router = useRouter()

  const handleDeleteReading = async (id: string) => {
    try {
      const baseUrl = process.env.DEV_BASE_URL
      const url = baseUrl + 'water-readings?id=' + id
      const token = localStorage.getItem('jwtToken')

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.status === 204) {
        toast.success('Leitura eliminada com sucesso.')
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else if (response.status === 401) {
        toast.error("O token é inválido!")
        router.push('/')
      }
    } catch (error) {
      toast.error("Ocorreu um erro, tente novamente!")
      console.log(error)
    }
  }

  return (
    <div className='mediumCard xs:h-card' style={{height: "40rem"}}>
        <div className='font-bold mt-6 text-xl mb-4'>As minhas leituras</div>
        <div className='h-2/5 w-full mb-4'>
            <ReadingsGraphic dataset={dataset} />
        </div>
        <ReadingsManage nextReadingDate={nextReadingDate} />
        <div className='my-4 px-1 pb-2 overflow-y-auto overflow-x-hidden scroll-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full flex flex-col items-center'>
          {dataset && dataset.length > 0 && dataset.map((item, index) => (
              <ReadingItem key={index} month={item.reading_date} value={item.amount} id={item.id} action={handleDeleteReading}/>
          ))}
        </div>
        <ToastContainer />
    </div>
  )
}

export default ReadingsCard