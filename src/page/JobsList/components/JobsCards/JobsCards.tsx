import { CircularProgress, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useContext } from 'react'
import { JobsContext } from '../Context'
import JobCard from '../JobCard/JobCard'

const JobCards = () => {
  const context = useContext(JobsContext)

  let content
  if (context?.isLoading)
    content = (
      <Container sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    )
  if (context?.isSuccess && context.response?.data.length === 0) {
    content = (
      <Container sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
        <Typography>Not match key words</Typography>
      </Container>
    )
  } else if (context?.isSuccess && context.response?.data) {
    content = context?.response?.data.map((job) => (
      <Grid key={job.id} item xs={12}>
        <JobCard {...job} />
      </Grid>
    ))
  }
  return (
    <Grid container spacing={1} sx={{ my: 2 }}>
      {content}
    </Grid>
  )
}

export default JobCards
