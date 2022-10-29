import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material'
export interface JobInformationInterface {}

const JobInformation : React.FC<JobInformationInterface> = () => {
	return (
		<List sx={{width:'100%', display:'flex'}}>
            <ListItem>
                <ListItemText>30 Applied</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>22 Reviewed</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>10 Interview</ListItemText>
            </ListItem>
        </List>
	)
};

export default JobInformation;
