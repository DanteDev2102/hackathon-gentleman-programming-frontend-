import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { JobsContext } from '../Context'

export default function SearchBar() {
  const context = useContext(JobsContext)
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ({ search }) => {
      context?.setSearchValue({
        query: search,
        per_page: 10,
        page: 1,
      })
    },
  })

  return (
    <Paper
      component='form'
      onSubmit={formik.handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 2 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Jobs'
        id='search'
        name='search'
        inputProps={{ 'aria-label': 'search' }}
        onChange={formik.handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search jobs'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
