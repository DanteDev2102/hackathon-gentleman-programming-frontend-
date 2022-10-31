import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Link as RouterLink } from 'react-router-dom'
import { PrivateRoutes } from '@/routes'
import RecommendedJobCard from './RecommendedJobCard'
import { useContext } from 'react'
import { HomeContext } from '../../Context'

const RecommendedJob = () => {
  return (
    <Grid container spacing={1} justifyContent='center'>
      <Grid item xs={6}>
        <Typography variant='subtitle2' fontWeight='bold'>
          Recommended Jobs
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
      <Grid item xs={5}>
        <RecommendedJobCard />
      </Grid>
      <Grid item xs={5}>
        <RecommendedJobCard />
      </Grid>
    </Grid>
  )
}
export default RecommendedJob
