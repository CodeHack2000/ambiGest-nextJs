import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { FC } from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

interface ReadingPopupDatepickerProps {
  setDate: (date: Dayjs) => void
  date: Dayjs
}

const ReadingPopupDatepicker: FC<ReadingPopupDatepickerProps> = ({setDate, date}) => {
    const handleDateChange = (newDate: Dayjs | null) => {
        if (newDate) {
          setDate(newDate);
        }
      };

  return (
    <div className='flex'>
        <img 
          src='./images/date.svg'
          width={40}
          height={40}
          className='mr-4'/>
        <div className='w-56'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                  value={date}
                  onChange={handleDateChange}/>
          </LocalizationProvider>
        </div>
    </div>
  )
}

export default ReadingPopupDatepicker