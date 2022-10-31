import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

const Loader = () => {
  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <CircularProgress size={200} />
    </Box>
  )
}
export default Loader
