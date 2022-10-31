import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
const RecommendedJobCard = () => {
  return (
    <Card
      variant='outlined'
      sx={{ display: 'flex', justifyItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <CardContent>
        <Typography component='div'>UX Designer</Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
          neox-cl
        </Typography>
        <Button size='small'>See Detail</Button>
      </CardContent>
    </Card>
  )
}

export default RecommendedJobCard
