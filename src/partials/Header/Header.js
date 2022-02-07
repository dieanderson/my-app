
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
