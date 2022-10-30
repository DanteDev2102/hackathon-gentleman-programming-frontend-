import { AccountCircle } from '@mui/icons-material';
import {  Button, Menu, MenuItem, Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import './styles/Header.css';
export interface HeaderInterface {}




const Header : React.FC<HeaderInterface> = () => {



	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" className={''} color="inherit" aria-label="menu">
				{/* <MenuIcon /> */}
				</IconButton>
				<Typography variant="h6" className={''}>
				Get On Board API
				</Typography>
				{/* <Button color="inherit">Login</Button> */}
			</Toolbar>
		</AppBar>
   
	)
};

export default Header;
