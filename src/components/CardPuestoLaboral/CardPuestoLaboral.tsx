import { Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from '@mui/material';
import React from 'react';
import './styles/CardPuestoLaboral.css';
import { PuestoTabajo } from '../../models/PustoTrabajo';
export interface CardPuestoLaboralInterface {
	puestoTabajo : PuestoTabajo
}




const CardPuestoLaboral : React.FC<CardPuestoLaboralInterface> = ( prop ) => {

	const { puestoTabajo } = prop

	return (
		<Card className={''}>
			<CardContent>

				<CardHeader title={puestoTabajo.attributes.title} />
	
				<Typography variant="subtitle1" color="textSecondary">
					{puestoTabajo.attributes.modality} | {puestoTabajo.attributes.seniority}
				</Typography>
			
			</CardContent>

			<CardActions>
				<Button size="small">Añadir</Button>
			</CardActions>
    	</Card>
	
	)
};

export default CardPuestoLaboral;
