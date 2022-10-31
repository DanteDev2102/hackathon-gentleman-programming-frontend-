import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { UserProfile } from './components'
import JobInformation from './components/JobInformation'
import UserInformation from './components/UserInformation'

export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  return (
    <Grid xs={12} item>
      <Container sx={{ minHeight: '100vh', padding: '0' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <ChevronLeftIcon />
          <Typography>Edit</Typography>
        </Box>
        <UserProfile />
        <JobInformation />
        <UserInformation />
      </Container>
    </Grid>
  )
}

export default Profile
