import { useState } from 'react'
import { 
    Typography, 
    TextField, 
    Button, 
    Stack,
    Box,
} from '@mui/material'
import { AccountCircle, VpnKey } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import useAuth from '../state/auth'

const Login = () => {    
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const {setUser} = useAuth()
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value} = e.target

        setForm({
            ...form,
            [name]: value,
        })        
    }

    const handleFormSubmit = () => {
        setIsLoading(true)

        setTimeout( () => {
            const response = {
                success: true,
                email: form.email,                
            }

            setUser({
                logged: response.success,
                email: response.email,
            })

            navigate('/')

        }, 2000)
    }

    return(
        <Stack spacing={3}  justifyContent="center" alignItems="center">
            <Box sx={{
                    backgroundColor: 'white', 
                    width: '360px', 
                    height: '350px', 
                    justifyContent:'center', 
                    alignItems:'center',
                    borderRadius: '10px',
                }}
            >
                <Stack spacing={3}  justifyContent="center" alignItems="center" m>
                    <Typography variant="h4">Acesso Restrito</Typography>          

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            onChange={handleInputChange} 
                            label="Digite seu e-mail" 
                            variant="standard" 
                            name="email" 
                            sx={{width: '250px'}}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            onChange={handleInputChange}
                            label="Digite sua senha" 
                            variant="standard" 
                            name="password" 
                            type="password" 
                            sx={{width: '250px'}}
                        />
                    </Box>

                    <Box>
                        <Button
                            onClick={handleFormSubmit} 
                            variant="contained" 
                            color="primary" 
                            sx={{width: '290px', mt: 3}}
                        >
                            {isLoading ? 'Aguarde...' : 'Entrar'}
                        </Button>
                    </Box>
                </Stack>
            </Box>

        </Stack>       
           
    )
}

export default Login