import { 
    Container,
    Box, 
} from '@mui/material'

const Clean = ({Component}) => {

    return(
        
        <Box sx={{ padding: "20vh 0", backgroundColor: "primary.main", height: "100vh" }}>
            <Container>
                <Component />
            </Container>
        </Box>
        
    )
}

export default Clean