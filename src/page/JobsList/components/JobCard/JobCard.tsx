import { Attributes, Jobs } from '@/redux'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { Button, CardContent, Chip, Divider, Grid, Link, Modal, Paper, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useState } from 'react'
import { modalStyle } from './modalStyle'
import AddBoxIcon from '@mui/icons-material/AddBox'
import CloseIcon from '@mui/icons-material/Close'
import FaceIcon from '@mui/icons-material/Face'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const JobCard = (Jobs: Jobs) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const textFormatter = (text: string) => {
    return text
      .replaceAll('<p>', '')
      .replaceAll('</p>', '')
      .replaceAll('<br>', '')
      .replaceAll('<li>', '')
      .replaceAll('</li>', '')
      .replaceAll('<ul>', '')
      .replaceAll('</ul>', '')
      .replaceAll('<ol>', '')
      .replaceAll('</ol>', '')
      .replaceAll('<em>', '')
      .replaceAll('</em>', '')
      .replaceAll('<strong>', '')
      .replaceAll('</strong>', '')
  }

  return (
    <Card variant='outlined'>
      <CardContent>
        <Box>
          <Box display='flex' flexDirection='row'>
            <Typography variant='h5'>{Jobs.attributes.title}</Typography>
            <Typography variant='h5' fontWeight={100}>
              &nbsp;| {Jobs.attributes.category_name}
            </Typography>
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography variant='subtitle1'>{Jobs.attributes.country} | </Typography>
            <Typography variant='subtitle1'>&nbsp;Candidatos: {Jobs.attributes.applications_count} </Typography>
            {Jobs.attributes.applications_count > 100 ? (
              <Tooltip title='Trending' placement='top'>
                <LocalFireDepartmentIcon fontSize='large' />
              </Tooltip>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box display='flex' justifyContent='end'>
          <Grid container>
            <Grid item xs={12} display='flex' justifyContent='end'>
              <Button sx={{}} size='large' onClick={handleOpen} startIcon={<AddBoxIcon fontSize='large' />}>
                details
              </Button>
            </Grid>
          </Grid>
          <Modal
            closeAfterTransition
            sx={{ overflow: 'scroll' }}
            open={open}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Paper variant='outlined'>
              <Box sx={modalStyle}>
                <Grid display={'flex'} justifyContent={'end'} maxWidth={1200} container>
                  <Grid item>
                    <Button variant='text' color='error' onClick={handleClose} size='medium'>
                      close
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid sx={{ display: 'flex' }}>
                      <Typography variant='h6' component='h2'>
                        {Jobs.attributes.title}
                      </Typography>
                      {Jobs.attributes.applications_count > 100 ? (
                        <Tooltip title='Trending' placement='top'>
                          <LocalFireDepartmentIcon fontSize='large' />
                        </Tooltip>
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Typography variant='h6' fontWeight={100}>
                      {Jobs.attributes.category_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display='flex' justifyContent='space-between'>
                    <Tooltip title='Work site' placement='top'>
                      <Chip color='success' label={Jobs.attributes.country} variant='outlined' />
                    </Tooltip>
                    <Tooltip title='Personas aplicando' placement='top'>
                      <Chip icon={<FaceIcon />} label={Jobs.attributes.applications_count} variant='outlined' />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'>
                        <Typography variant='subtitle1' fontWeight='bold'>
                          {Jobs.attributes.description_headline}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant='body1'>{textFormatter(Jobs.attributes.description)}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='functions'>
                        <Typography variant='subtitle1' fontWeight='bold'>
                          {Jobs.attributes.functions_headline}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant='body1'>{textFormatter(Jobs.attributes.functions)}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='functions'>
                        <Typography variant='subtitle1' fontWeight='bold'>
                          {Jobs.attributes.benefits_headline}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant='body1'>{textFormatter(Jobs.attributes.benefits)}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button size='small' fullWidth variant='text'>
                      <Link href={Jobs.links.public_url} target='_blank' sx={{ textDecoration: 'none' }}>
                        Apply this job
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Modal>
        </Box>
      </CardContent>
    </Card>
  )
}
export default JobCard
