'use client'

import { FC, useEffect, useState } from 'react'
import { FormControl, InputLabel, NativeSelect, OutlinedInput } from '@mui/material'
import InputAdorment from '@mui/material/InputAdornment'

interface PopupInputProps {
    writing?: (text: string) => void
    text?: string
    inputType: string
    onChoose?: (text: string) => void
    defaultValue?: string
}

const PopupInput: FC<PopupInputProps> = ({writing, inputType, text, onChoose, defaultValue}) => {
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
        if (inputType === "dayTime") {
            setImgUri("../images/dayTime.svg")
            setCustomSize(40)
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
                <FormControl fullWidth>
                    <NativeSelect
                        value={text}
                        onChange={onChoose != undefined ? ((event) => onChoose(event.target.value)) : (undefined)}
                        defaultValue={defaultValue ? defaultValue : "Vidro"}>
                            <option value="Vidro">Vidro</option>
                            <option value="Resíduos Metálicos">Resíduos Metálicos</option>
                            <option value="Resíduos Eletrónicos">Resíduos Eletrónicos</option>
                            <option value="Papel e Cartão">Papel e Cartão</option>
                            <option value="Plástico">Plástico</option>
                            <option value="Resíduos Orgânicos">Resíduos Orgânicos</option>
                            <option value="Óleo de Cozinha">Óleo de Cozinha</option>
                            <option value="Roupa e Têxteis">Roupa e Têxteis</option>
                            <option value="Entulho e Construção">Entulho e Construção</option>
                            <option value="Medicamentos Vencidos">Medicamentos Vencidos</option>
                            <option value="Lâmpadas">Lâmpadas</option>
                    </NativeSelect>
                </FormControl>
            )
        } else if (inputType === 'dayTime') {
            return (
                <FormControl fullWidth>
                    <NativeSelect
                        value={text}
                        onChange={onChoose != undefined ? ((event) => onChoose(event.target.value)) : (undefined)}
                        defaultValue={defaultValue ? defaultValue : "Manhã"}>
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noite">Noite</option>
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