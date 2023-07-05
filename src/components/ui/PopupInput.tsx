'use client'

import { FC, useEffect, useState } from 'react'
import { FormControl, InputLabel, NativeSelect, OutlinedInput } from '@mui/material'
import InputAdorment from '@mui/material/InputAdornment'

interface PopupInputProps {
    writing?: (text: string) => void
    text?: string
    inputType: string
    value?: string
    onChoose?: (text: string) => void
}

const PopupInput: FC<PopupInputProps> = ({writing, inputType, text, onChoose, value}) => {
    const [imgUri, setImgUri] = useState("")

    useEffect(() => {
        if (inputType === "number") {
            setImgUri("./images/readingWater.svg")
        }
        if (inputType === "collection") {
            setImgUri("../images/plant.svg")
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
            {inputType === "number" ? (
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
                        onChange={writing != undefined ? ((event) => writing(event.target.value)) : (undefined)}/>
                </FormControl>
            ) : (
                // É NECESSÁRIO CRIAR AS OPÇÕES DE RECOLHA
                <FormControl fullWidth>
                    <NativeSelect
                        value={text}
                        onChange={onChoose != undefined ? ((event) => onChoose(event.target.value)) : (undefined)}>
                            <option value="Eletrodomésticos">Eletrodomésticos</option>
                            <option value="Mobiliários">Mobiliários</option>
                            <option value="Pilhas">Pilhas</option>
                    </NativeSelect>
                </FormControl>
            )}
        </div>
    </div>
  )
}

export default PopupInput