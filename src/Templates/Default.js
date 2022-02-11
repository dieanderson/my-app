import { 
    Container,
    Box, 
} from '@mui/material'

import Header from "../partials/Header/Header"
import useAuth from '../state/auth'

const Default = ({children}) => {    
    const { user } = useAuth()

    return(
        <>
            <Header user={user} />
            <Box sx={{ padding: "15px 0"}}>
                <Container>
                    {children}
                </Container>
            </Box>
        </>
        
    )
}

export default Default