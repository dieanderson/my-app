import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import useStyles from './Header.style'

const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = (route) => {
    history.push(route)
    handleToggleMenu()
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={ () => { handleToggleMenu() }}
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

      <Drawer open={menuOpen} onClose={() => { handleToggleMenu() }}>
        <List>
          <ListItem button onClick={ () => { handleMenuClick('/') } }>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={ () => { handleMenuClick('/customers') } }>
            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            <ListItemText>Cadastro de Clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
