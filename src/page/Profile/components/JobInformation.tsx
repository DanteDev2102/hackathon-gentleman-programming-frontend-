import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material'
export interface JobInformationInterface {}

const JobInformation : React.FC<JobInformationInterface> = () => {
	return (
		<List sx={{width:'100%', display:'flex'}}>
            <ListItem>
                <ListItemText sx={{textAlign:'center'}}>30 Applied</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText sx={{textAlign:'center'}}>10 Reviewed</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText sx={{textAlign:'center'}}>20 Interview</ListItemText>
            </ListItem>
        </List>
	)
};

export default JobInformation;
