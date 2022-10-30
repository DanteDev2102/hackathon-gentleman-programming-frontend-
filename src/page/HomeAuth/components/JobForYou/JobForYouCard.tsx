import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'

const JobForYouCard = () => {
  return (
    <Box>
      <Card variant='outlined' sx={{ bgcolor: grey[100] }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            Titulo del puesto
          </Typography>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Titulo del puesto
          </Typography>

          <Stack direction='row' marginTop={2} spacing={1} display='flex' justifyContent='center'>
            <Chip label='Design' />
            <Chip label='Full time' />
            <Chip label='Junior' />
          </Stack>
        </CardContent>
        <CardActions>
          <Button sx={{ display: 'flex', justifyItems: 'end' }} size='small'>
            See Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
export default JobForYouCard
