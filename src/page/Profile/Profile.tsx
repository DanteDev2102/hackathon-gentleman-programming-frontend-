import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system';
import React from 'react';
import './styles/Profile.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export interface ProfileInterface {}

const Profile : React.FC<ProfileInterface> = () => {
	return (
		<div className='profile'>
            <Container>
                <ChevronLeftIcon/>
                <Box>
                    <Avatar>H</Avatar>
                </Box>
            </Container>
		</div >
	)
};

export default Profile;
