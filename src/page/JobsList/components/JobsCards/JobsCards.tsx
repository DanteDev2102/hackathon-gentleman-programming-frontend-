import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useContext } from 'react'
import { JobsContext } from '../Context'
import JobCard from '../JobCard/JobCard'

const JobCards = () => {
  const context = useContext(JobsContext)
  console.log(context?.response)
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}></Grid>
      {context?.response?.data.map((job) => {
        return (
          <Grid key={job.id} item xs={12}>
            <JobCard
              title={job.attributes.title}
              category_name={job.attributes.category_name}
              country={job.attributes.country}
              applications_count={job.attributes.applications_count}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default JobCards
