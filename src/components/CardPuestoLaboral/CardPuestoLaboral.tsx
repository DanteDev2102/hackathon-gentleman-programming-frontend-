import { Button, Card, CardActions, CardContent, CardHeader, makeStyles, Typography } from '@mui/material';
import React, { useReducer, useState } from 'react';
import './styles/CardPuestoLaboral.css';
import { PuestoTabajo } from '../../models/PustoTrabajo';
import ModalJobs from '@/page/PuestosLaborales/components/ModalJobs';
import { modalActionTypes, modalReducer } from '@/page/PuestosLaborales/reducer/modalReducer';
export interface CardPuestoLaboralInterface {
	puestoTabajo : PuestoTabajo
}

const CardPuestoLaboral : React.FC<CardPuestoLaboralInterface> = ( prop ) => {
    const [state, dispatch] = useReducer(modalReducer, false)
	const setOn = () => dispatch({type: modalActionTypes.ON})
	const { puestoTabajo } = prop
	return (
		<Card className={''}>
			<CardContent>
				<CardHeader onClick={setOn} title={puestoTabajo.attributes.title} />
					{state && <ModalJobs setOpenModal={dispatch} state><h1>Hola</h1></ModalJobs>}
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
