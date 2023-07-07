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
    const [customSize, setCustomSize] = useState(40)

    useEffect(() => {
        if (inputType === "number") {
            setImgUri("./images/readingWater.svg")
            setCustomSize(40)
        }
        if (inputType === "collection") {
            setImgUri("../images/plant.svg")
            setCustomSize(40)
        }
        if (inputType === "username") {
            setImgUri("../images/pencil.svg")
            setCustomSize(30)
        }
        if (inputType === "email") {
            setImgUri("../images/email.svg")
            setCustomSize(30)
        }
        if (inputType === "password") {
            setImgUri("../images/key.svg")
            setCustomSize(30)
        }
    }, [inputType])

    const getForm = () => {
        if (inputType === "number") {
            return (
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
            )
        } else if (inputType === "collection") {
            return (
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
            )
        } else if (inputType === "username" || inputType === "email") {
            return (
                <FormControl variant='outlined'>
                    <OutlinedInput 
                        id='fullWidth'
                        placeholder={inputType}
                        type='text'
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        value={text}
                        onChange={writing != undefined ? ((event) => writing(event.target.value)) : (undefined)}/>
                </FormControl>
            )
        } else if (inputType === "password") {
            return (
                <FormControl variant='outlined'>
                    <OutlinedInput 
                        id='fullWidth'
                        placeholder={inputType}
                        type='password'
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        value={text}
                        onChange={writing != undefined ? ((event) => writing(event.target.value)) : (undefined)}/>
                </FormControl>
            )
        }
    }

  return (
    <div className='flex justify-between items-center my-4'>
        <img 
            src={imgUri}
            width={customSize}
            height={customSize}
            className='mr-4'/>
        <div className='w-56'>
            {getForm()}
        </div>
    </div>
  )
}

export default PopupInput