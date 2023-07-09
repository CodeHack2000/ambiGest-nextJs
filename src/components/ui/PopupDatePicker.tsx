import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { FC } from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'

interface PopupDatepickerProps {
  setDate: (date: Dayjs) => void
  date: Dayjs
  defaultDate?: Dayjs
}

const PopupDatepicker: FC<PopupDatepickerProps> = ({setDate, date, defaultDate}) => {
    const handleDateChange = (newDate: Dayjs | null) => {
        if (newDate) {
          setDate(newDate);
        }
      };

  return (
    <div className='flex'>
        <img 
          src='../images/date.svg'
          width={40}
          height={40}
          className='mr-4'/>
        <div className='w-56'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
              defaultValue={defaultDate ? defaultDate : dayjs()}
              value={date}
              onChange={handleDateChange}
              views={['year', 'month', 'day']}
              format='YYYY-MM-DD'/>
          </LocalizationProvider>
        </div>
    </div>
  )
}

export default PopupDatepicker