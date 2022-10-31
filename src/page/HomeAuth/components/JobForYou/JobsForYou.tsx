import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import JobForYouCard from './JobForYouCard'
import { Link as RouterLink } from 'react-router-dom'
import { PrivateRoutes } from '@/routes'

const JobsForYou = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant='subtitle2' fontWeight='bold'>
          Surprise Jobs
        </Typography>
      </Grid>
      <Grid item xs={6} display='grid' justifyItems='end'>
        <Typography variant='body2' component={RouterLink} to={PrivateRoutes.JOBS}>
          See all
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ marginBottom: 1 }} />
      </Grid>

      <Grid>
        <Divider sx={{ height: 5, m: 0.5 }} orientation='horizontal' />
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <JobForYouCard />
      </Grid>
    </Grid>
  )
}
export default JobsForYou
