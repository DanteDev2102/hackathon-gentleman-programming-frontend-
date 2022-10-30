import React from 'react';
import './styles/FiltrosBar.css';
import Button from '@mui/material/Button';
import {  Box } from '@mui/material';
import TextField from '@mui/material/TextField';
export interface FiltrosBarInterface {}

const FiltrosBar : React.FC<FiltrosBarInterface> = () => {
	return (
		<Box className='filtrosbar' sx={{ boxShadow: 1, width: "100%", minHeight:"50px", padding: "15px" }}>
			<form className='flex'>
			  	<TextField id="outlined-basic" label="Compañías" variant="outlined" />
			  	<TextField id="outlined-basic" label="Categoría de puesto laboral" variant="outlined" />
			  	<TextField id="outlined-basic" label="Tecnología" variant="outlined" />
			  	<TextField id="outlined-basic" label="Modalidad" variant="outlined" />
			  	<TextField id="outlined-basic" label="Seniority" variant="outlined" />
			  	<TextField id="outlined-basic" label="Perks ( beneficios )" variant="outlined" />
      		</form>
			  <Button variant="contained">Contained</Button>
		</Box>
	)
};

export default FiltrosBar;
