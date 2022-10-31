import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SearchBar from './components/SearchBar/SearchBar'
import { JobsContextProvider } from './components/Context'
import { useContext } from 'react'
import { JobsContext } from './components/Context'
import { JobsCards } from './components/JobsCards'

const JobsList = () => {
  return (
    <JobsContextProvider>
      <Box component='main' sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container maxWidth='md' marginTop={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <JobsCards />
        </Grid>
      </Box>
    </JobsContextProvider>
  )
}
export default JobsList
