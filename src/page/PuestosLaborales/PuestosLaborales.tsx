import { Grid, Paper } from '@mui/material';
import React, {useEffect} from 'react';
import { CardPuestoLaboral } from '../../components/CardPuestoLaboral';
import { ResposePuestoTabajo } from '../../models/PustoTrabajo';
import './styles/PuestosLaborales.css';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { puestosTrabajoData } from '../../data/puestosTrabajo';
import { ContainsPuestosTrabajo } from '../../components/ContainsPuestosTrabajo';
import { FiltrosBar } from '../../components/FiltrosBar';
import { getPuestosTrabajo } from '../../services/getPuestosTrabajos';
export interface PuestosLaboralesInterface {}

const PuestosLaborales : React.FC<PuestosLaboralesInterface> = () => {

	const [puestosTrabajo, setPuestosTrabajo] = useState<ResposePuestoTabajo>(puestosTrabajoData)
	console.log(puestosTrabajo)
	const init = async() => {
		let a = await getPuestosTrabajo();

		console.log(a);
		
	}

	useEffect(() => {
		init()
	}, [])
	

	return (
		<div className='puestoslaborales flex'>

			<FiltrosBar />

			<ContainsPuestosTrabajo puestosTabajo={puestosTrabajo}/>

			<Pagination count={10} />

			
		</div >
	)
};

export default PuestosLaborales;
