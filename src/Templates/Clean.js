import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( () =>({
    container: {
      padding: '15px 0',
    },
}))

const Clean = ({Component}) => {
    const classes = useStyles()

    return(
        <>
            <Container className={classes.container}>
                <Component />
            </Container>
        </>
    )
}

export default Clean