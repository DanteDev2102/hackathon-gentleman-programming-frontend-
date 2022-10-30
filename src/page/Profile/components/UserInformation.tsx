import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material'
export interface UserInformationInterface {}

type Characters = {
    name: string
}    
const UserInformation : React.FC<UserInformationInterface> = () => {
    const [characters, setCharacters] = useState<Characters>({
        name: ''
    })

	return (
        <Container>
            <Box>
            <Typography sx={{textAlign:'start'}}>About</Typography>
            
            </Box>
        </Container>
	)
};

export default UserInformation;
