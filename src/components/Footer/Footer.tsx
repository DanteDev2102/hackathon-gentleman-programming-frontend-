import { Copyright } from '@/components'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

const Footer = () => {
  return (
    <Box component={'footer'} sx={{ bgcolor: 'black', color: 'white', p: 5 }}>
      <Copyright />
    </Box>
  )
}
export default Footer
