import { useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import Toasty from '../../components/Toasty'

const CustomersRegister = () => {

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        email: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState({
        open: false,
        message: '',
        severity: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value: value,
            },
        })
    }

    const handleRegisterButton = () => {
        let hasError = false
        let newFormState = {
           ...form,
       }
       setIsLoading(true)
        
        if(!form.name.value){
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Informe o nome corretamente!',
            }    
        }

        if(!form.email.value){
            hasError = true
            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: 'Informe o e-mail corretamente!',
            }
        }

        if(hasError){
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            email: form.email.value,
        }).then((response) => {
            setOpenToasty({
                open: true,
                severity: 'success',
                message: 'Cliente cadastrado com sucesso!'
            })
            setIsLoading(false)
        })

    }

    return(
        
            <Stack spacing={2} direction="column">

                <TextField 
                    label="Digite o seu nome" 
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''} 
                    value={form.name.value} 
                    name="name" 
                    onChange={handleInputChange}
                />
                
                <TextField 
                    label="Digite o seu e-mail" 
                    error={form.email.error} 
                    helperText={form.email.error ? form.email.helperText : ''} 
                    value={form.email.value} 
                    name="email" 
                    onChange={handleInputChange}
                />

                <Button 
                    variant="contained" 
                    onClick={handleRegisterButton}
                    disabled={isLoading}
                >
                   { isLoading ? 'Aguarde...' : 'Cadastrar'}
                </Button>

                <Toasty 
                    open={openToasty.open} 
                    severity={openToasty.severity} 
                    message={openToasty.message}
                    onClose={() => setOpenToasty(false)}
                />

            </Stack>           
       
    )
}

export default CustomersRegister