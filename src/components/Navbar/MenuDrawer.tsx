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
import { useAppDispatch, useAuth } from '@/hooks'
import LogoutIcon from '@mui/icons-material/Logout'
import { resetCredentials } from '@/redux/login/authSlice'

export default function MenuDrawer() {
  const navigate = useNavigate()
  const user = useAuth()
  const dispatch = useAppDispatch()
  const handleNavigate = (route: string) => () => {
    navigate(route)
  }
  const handleLogout = () => {
    dispatch(resetCredentials())
    navigate(PublicRoutes.LOGIN)
  }

  return (
    <List sx={{ textAlign: 'center' }}>
      <ListItem disablePadding>
        <ListItemButton onClick={handleNavigate(PublicRoutes.HOME)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItemButton>
      </ListItem>

      {user.auth ? (
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItemButton>
        </ListItem>
      ) : (
        <>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNavigate(PublicRoutes.LOGIN)}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={'Login'} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={handleNavigate(PublicRoutes.REGISTER)}>
              <ListItemIcon>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText primary={'Register'} />
            </ListItemButton>
          </ListItem>
        </>
      )}

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
