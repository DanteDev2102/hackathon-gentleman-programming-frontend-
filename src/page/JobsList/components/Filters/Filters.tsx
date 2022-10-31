import { useAuth } from '@/hooks'
import { CategoriesI, useGetCategoriesQuery } from '@/redux/api/categoriesApiSlice'
import { CompaniesI, useGetCompaniesQuery } from '@/redux/api/companiesApiSlice'
import { ModalitiesI, useGetModalitiesQuery } from '@/redux/api/modalitiesApiSlice'
import { PerksI, useGetPerksQuery } from '@/redux/api/perksApiSlice'
import { SenioritiesI, useGetSenioritiesQuery } from '@/redux/api/senioritiesApiSlice'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SortIcon from '@mui/icons-material/Sort'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { JobsContext } from '../Context'

const Filters = () => {
  const context = useContext(JobsContext)
  const user = useAuth()

  const formik = useFormik({
    initialValues: {
      companies: '',
      categories: '',
      modalities: '',
      seniorities: '',
      perks: '',
    },
    onSubmit: (filters) => {
      const strings = Object.values(filters).join(' ')
      context?.setSearchValue({
        query: strings,
        per_page: 10,
        page: 1,
      })
    },
  })

  const handleClear = () => {
    formik.resetForm()
    context?.setSearchValue({
      query: user.seniority,
      per_page: 10,
      page: 1,
    })
  }

  const { data: companiesR } = useGetCompaniesQuery()
  const { data: categoriesR } = useGetCategoriesQuery()
  const { data: modalitiesR } = useGetModalitiesQuery()
  const { data: seniorities } = useGetSenioritiesQuery()
  const { data: perksR } = useGetPerksQuery()
  let companiesOptions: CompaniesI[] = []
  let categoriesOptions: CategoriesI[] = []
  let modalitiesOptions: ModalitiesI[] = []
  let senioritiesOptions: SenioritiesI[] = []
  let perksOptions: PerksI[] = []
  if (perksR) perksOptions = perksR?.data
  if (seniorities) senioritiesOptions = seniorities?.data
  if (modalitiesR) modalitiesOptions = modalitiesR?.data
  if (companiesR) companiesOptions = companiesR?.data
  if (categoriesR) categoriesOptions = categoriesR?.data

  return (
    <Accordion sx={{ mt: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <SortIcon />
        <Typography>&nbsp;&nbsp;Keywords</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          component='form'
          container
          spacing={1}
          justifyContent='center'
          sx={{ my: 2 }}
          onSubmit={formik.handleSubmit}>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='companies'>Companies</InputLabel>
              <Select
                size='small'
                name='companies'
                label='Companies'
                value={formik.values.companies}
                onChange={formik.handleChange}>
                {companiesOptions.map((option) => (
                  <MenuItem key={option.id} value={option.attributes.name}>
                    {option.attributes.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='categories'>categories</InputLabel>
              <Select
                size='small'
                name='categories'
                value={formik.values.categories}
                label='categories'
                onChange={formik.handleChange}>
                {categoriesOptions.map((option) => (
                  <MenuItem key={option.id} value={option.attributes.name}>
                    {option.attributes.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='modalities'>modalities</InputLabel>
              <Select
                size='small'
                name='modalities'
                value={formik.values.modalities}
                label='modalities'
                onChange={formik.handleChange}>
                {modalitiesOptions.map((option) => (
                  <MenuItem key={option.id} value={option.attributes.name}>
                    {option.attributes.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='seniorities'>seniorities</InputLabel>
              <Select
                size='small'
                name='seniorities'
                value={formik.values.seniorities}
                label='seniorities'
                onChange={formik.handleChange}>
                {senioritiesOptions.map((option) => (
                  <MenuItem key={option.id} value={option.attributes.name}>
                    {option.attributes.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel id='perks'>perks</InputLabel>
              <Select
                size='small'
                name='perks'
                value={formik.values.perks}
                label='perks'
                onChange={formik.handleChange}>
                {perksOptions.map((option) => (
                  <MenuItem key={option.id} value={option.attributes.name}>
                    {option.attributes.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button type='submit' variant='outlined'>
                  Apply Keywords
                </Button>
              </Grid>
              <Grid item xs={6} display='flex' justifyContent='end'>
                <Button type='button' onClick={handleClear}>
                  Clear Keywords
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
export default Filters
/* 



*/
