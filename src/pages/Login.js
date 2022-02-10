import { 
    Typography, 
    TextField, 
    Button, 
    Stack,
    Box,
} from '@mui/material'

import { AccountCircle, VpnKey } from '@mui/icons-material'

const Login = () => {    

    return(
        <Stack spacing={3}  justifyContent="center" alignItems="center">

            <Typography variant="h3">Acesso Restrito</Typography>          

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    id="input-with-sx" 
                    label="Digite seu e-mail" 
                    variant="standard" 
                    name="email" 
                    sx={{width: '250px'}}
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <VpnKey sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    id="input-with-sx" 
                    label="Digite sua senha" 
                    variant="standard" 
                    name="password" 
                    type="password" 
                    sx={{width: '250px'}}
                />
            </Box>

            <Box>
                <Button variant="contained" color="primary" sx={{width: '290px', mt: 3}}>
                    Entrar
                </Button>
            </Box>

        </Stack>       
           
    )
}

export default Login