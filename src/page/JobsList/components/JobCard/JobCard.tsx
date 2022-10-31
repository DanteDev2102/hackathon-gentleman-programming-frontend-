import { Attributes, Jobs } from '@/redux'
import { CardContent, Tooltip, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

const JobCard = ({
  title,
  category_name,
  country,
  applications_count,
}: Pick<Attributes, 'title' | 'category_name' | 'country' | 'applications_count'>) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Box display='flex' flexDirection='row'>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='h5' fontWeight={100}>
            &nbsp;| {category_name}
          </Typography>
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Typography variant='subtitle1'>{country} | </Typography>
          <Typography variant='subtitle1'>&nbsp;Candidatos: {applications_count} </Typography>
          {applications_count > 100 ? (
            <Tooltip title='Trending' placement='top'>
              <LocalFireDepartmentIcon fontSize='large' />
            </Tooltip>
          ) : (
            <></>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}
export default JobCard
