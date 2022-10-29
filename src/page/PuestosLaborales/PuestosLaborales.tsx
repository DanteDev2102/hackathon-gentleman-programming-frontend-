import { Grid, Paper } from '@mui/material';
import React from 'react';
import { CardPuestoLaboral } from '../../components/CardPuestoLaboral';
import './styles/PuestosLaborales.css';
export interface PuestosLaboralesInterface {}

const PuestosLaborales : React.FC<PuestosLaboralesInterface> = () => {
	return (
		<div className='puestoslaborales flex'>
			<Grid item xs={12}>
          		<Paper className={''}>xs=12</Paper>
        	</Grid>

			<CardPuestoLaboral />
			<CardPuestoLaboral />
		</div >
	)
};

export default PuestosLaborales;
