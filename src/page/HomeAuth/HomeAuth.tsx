import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { JobsForYou } from './components'
import { RecommendedJob } from './components/Recomended'
import SearchBar from './components/SearchBar'

const HomeAuth = () => {
  return (
    <Container component='main' maxWidth='sm'>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2} display='flex' justifyContent='center'>
          <Grid item xs={12} textAlign='center'>
            <Typography>Welcome Back!</Typography>
            <Typography variant='h5'>Andres Parra 👋</Typography>
            <Typography variant='body2'>Apply to jobs!</Typography>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='center'>
            <Avatar sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={12}>
            <JobsForYou />
          </Grid>
          <Grid item xs={12}>
            <RecommendedJob />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default HomeAuth
