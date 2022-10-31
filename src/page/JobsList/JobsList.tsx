import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { JobsContextProvider } from './components/Context'
import { Filters } from './components/Filters'
import { JobsCards } from './components/JobsCards'
import SearchBar from './components/SearchBar/SearchBar'

const JobsList = () => {
  return (
    <JobsContextProvider>
      <Container component='main' sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container maxWidth='md' marginTop={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={12}>
            <Filters />
          </Grid>
          <JobsCards />
        </Grid>
      </Container>
    </JobsContextProvider>
  )
}
export default JobsList
