import { CircularProgress, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import { HomeContext } from '../../Context'

const JobForYouCard = () => {
  const { jobs, isLoading } = useContext(HomeContext)

  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      {jobs.length && !isLoading ? (
        jobs.map((job) => {
          return (
            <Grid item xs={12} key={job.id}>
              <Card variant='outlined'>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    {job.attributes.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 'tiny' }} color='text.secondary' gutterBottom>
                    {job.attributes.category_name}
                  </Typography>
                </CardContent>
                <Box display='flex' sx={{ justifyContent: 'space-between', alignContent: 'end', p: 2 }}>
                  <Stack direction='row' marginTop={2} spacing={1} display='flex' justifyContent='center'>
                    <Chip color='success' label={job.attributes.country} />
                  </Stack>
                  <CardActions>
                    <Button sx={{ display: 'flex', justifyItems: 'end' }} size='small'>
                      See Details
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          )
        })
      ) : (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  )
}

export default JobForYouCard
