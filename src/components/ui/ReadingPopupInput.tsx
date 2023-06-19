'use client'

import { FC, useEffect, useState } from 'react'
import { FormControl, OutlinedInput } from '@mui/material'
import InputAdorment from '@mui/material/InputAdornment'

interface ReadingPopupInputProps {
    writing: (text: string) => void
    text: string
    inputType: string
}

const ReadingPopupInput: FC<ReadingPopupInputProps> = ({writing, inputType, text}) => {
    const [imgUri, setImgUri] = useState("")

    useEffect(() => {
        if (inputType === "number") {
            setImgUri("./images/readingWater.svg")
        }
    }, [inputType])

  return (
    <div className='flex justify-between items-center my-4'>
        <img 
            src={imgUri}
            width={40}
            height={40}
            className='mr-4'/>
        <div className='w-56'>
            <FormControl variant='outlined'>
                <OutlinedInput 
                    id='fullWidth'
                    type='number'
                    endAdornment={<InputAdorment position='end'>m³</InputAdorment>}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    value={text}
                    onChange={(event) => writing(event.target.value)}/>
            </FormControl>
        </div>
    </div>
  )
}

export default ReadingPopupInput