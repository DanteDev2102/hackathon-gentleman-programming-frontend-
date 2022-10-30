import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '@/routes'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import LoginIcon from '@mui/icons-material/Login'

export default function MenuDrawer() {
  const navigate = useNavigate()
  return (
    <List sx={{ textAlign: 'center' }}>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate(PublicRoutes.HOME)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate(PublicRoutes.LOGIN)}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary={'Login'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate(PublicRoutes.REGISTER)}>
          <ListItemIcon>
            <AppRegistrationIcon />
          </ListItemIcon>
          <ListItemText primary={'Register'} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
