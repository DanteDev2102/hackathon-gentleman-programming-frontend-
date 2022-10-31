import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'

export default function SearchBar() {
  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search Jobs' inputProps={{ 'aria-label': 'search jobs' }} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search jobs'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
