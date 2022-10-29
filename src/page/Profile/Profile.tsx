import React from 'react';
import { UserProfile } from './components';
import JobInformation from './components/JobInformation';
import { Container } from '@mui/system';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './styles/Profile.css';
import UserInformation from './components/UserInformation';

export interface ProfileInterface {}

const Profile : React.FC<ProfileInterface> = () => {
	return (
	  <div className='profile'>
        <Grid xs={12} item>
            <Container sx={{minHeight:'100vh', padding:'0'}}>
                <Box sx={{width:'100%', display:'flex', justifyContent: 'space-between'}}>
                    <ChevronLeftIcon/>
                    <Typography>Edit</Typography>
                </Box>
                <UserProfile/>
                <JobInformation/>
                <UserInformation/>
            </Container>
        </Grid>
	  </div >
	)
};

export default Profile;
