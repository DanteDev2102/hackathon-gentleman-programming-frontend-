import React from 'react';
import { CardPuestoLaboral } from '../CardPuestoLaboral';
import './styles/ContainsPuestosTrabajo.css';
import { ResposePuestoTabajo } from '../../models/PustoTrabajo';
export interface ContainsPuestosTrabajoInterface {
	puestosTabajo : ResposePuestoTabajo
}

const ContainsPuestosTrabajo : React.FC<ContainsPuestosTrabajoInterface> = ( props ) => {

	const { puestosTabajo } = props

	const renderPuestosTrabajo = () => {

		return puestosTabajo.data.map((puestoTrabajo, index) => (

			<CardPuestoLaboral 
				key            = {index}
				puestoTabajo   = {puestoTrabajo}
				
			/>

		))
		
	}

	return (
		<section className='flex containspuestostrabajo'>
			{
				renderPuestosTrabajo()
			}
		</section>
	)
};

export default ContainsPuestosTrabajo;
