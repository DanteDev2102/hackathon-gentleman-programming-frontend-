import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import TextFieldLimitCharacters from './TextField';
export interface UserInformationInterface {}

type Characters = {
    name: string
}    
const UserInformation : React.FC<UserInformationInterface> = () => {
    const [characters, setCharacters] = useState<Characters>({
        name: ''
    })

	return (
        <Box>

            <Typography sx={{textAlign:'start'}}>About</Typography>
            <TextFieldLimitCharacters/>

            <Typography>Technologies</Typography>
        </Box>
	)
};

export default UserInformation;
