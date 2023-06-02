import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { FC } from 'react'

interface CollectionSearchInputProps {
  value: string
  onWrite: (txt: string) => void
  onSearch: () => void
}

const CollectionSearchInput: FC<CollectionSearchInputProps> = ({value, onWrite, onSearch}) => {
  return (
    <FormControl variant='outlined' sx={{ m: 1, width: '25ch' }}>
        <InputLabel htmlFor="search">Pesquisar Rua</InputLabel>
        <OutlinedInput 
        id='search'
        label="Insire a sua rua"
        value={value}
        onChange={(event) => onWrite(event.target.value)}
        size='small'
        endAdornment={
            <InputAdornment position='end'>
                <IconButton
                    edge="end"
                    onClick={onSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-5 h-5 text-primary-dark transitionReScale">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                </IconButton>
            </InputAdornment>
        }/>
    </FormControl>
  )
}

export default CollectionSearchInput