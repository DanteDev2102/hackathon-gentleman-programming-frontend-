import { Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from '@mui/material';
import React from 'react';
import './styles/CardPuestoLaboral.css';
export interface CardPuestoLaboralInterface {}



const CardPuestoLaboral : React.FC<CardPuestoLaboralInterface> = () => {

	

	return (
		<Card className={''}>
			<CardContent>
				<CardHeader title={'Diseñador(a) UX/UI'}>
					
				</CardHeader>
					

					<Typography variant="subtitle1" color="textSecondary">
					Semi Senior | Freelace
					</Typography>
			
				

			
			</CardContent>
			<CardActions>
				<Button size="small">Añadir</Button>
			</CardActions>
    	</Card>
	
	)
};

export default CardPuestoLaboral;
