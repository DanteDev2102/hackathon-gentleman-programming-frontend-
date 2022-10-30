import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent, Typography } from '@mui/material';

export interface UserProfileInterface {}

const UserProfile : React.FC<UserProfileInterface> = () => {
	return (
		<Card sx={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center', boxShadow:'none'}}>
			<Avatar sx={{width:'64px', height:'64px'}}>H</Avatar>
			<CardContent>
				<Typography component='h2'>Haley Jessica</Typography>
				<Typography>Argentina, Buenos Aires</Typography>
			</CardContent>
		</Card>
	)
};

export default UserProfile;