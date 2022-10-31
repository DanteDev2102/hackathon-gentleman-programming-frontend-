import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import * as React from 'react'
import MenuDrawer from './MenuDrawer'
import MenuNav from './MenuNav'
import { PrivateRoutes, PublicRoutes } from '@/routes'

interface Props {
  window?: () => Window
}

const drawerWidth = 240

export default function Navbar(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' component={RouterLink} to={PrivateRoutes.PROFILE}>
        Jobizz
      </Typography>
      <Divider />
      <MenuDrawer />
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            size='large'
            sx={{ mr: 2, display: { sm: 'none' }, justifyContent: 'space-between' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'block' } }}>
            Jobizz
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <MenuNav />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component='main'>
        <Toolbar />
      </Box>
    </Box>
  )
}
