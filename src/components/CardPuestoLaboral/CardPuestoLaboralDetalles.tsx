import { PuestoTabajo } from '@/models/PustoTrabajo'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WorkIcon from '@mui/icons-material/Work';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
type Props = {
    details: PuestoTabajo
}


const CardPuestosDetalles = ({details}: Props) => {
    const remoteModalityDetail
     = details.attributes.remote_modality.replace('_', ' ')
  return (
    <Box>
        <Typography component='h2' variant='h5'>{details.attributes.title}</Typography>

        <Typography component='h4' variant='h6' color='text.secondary' sx={{display: 'flex', alignContent:'center', fontSize:'1.2rem'}}> 
            <WorkIcon sx={{marginRight:'5px'}} /> {details.attributes.modality} - {details.attributes.seniority} 
        </Typography>

        <Typography component='h2' variant='h6' color='text.secondary' sx={{display: 'flex', alignContent:'center', fontSize:'1.2rem'}}>
            <MapsHomeWorkIcon sx={{marginRight:'5px'}}/> {details.attributes.country} - {remoteModalityDetail}
        </Typography>

        {/* <Typography component='h2' variant='h5'><WorkIcon/> {details.attributes.title}</Typography> */}
        <div className="Container" dangerouslySetInnerHTML={{__html: details.attributes.desirable}}></div>
        
    </Box>
  )
}
export default CardPuestosDetalles