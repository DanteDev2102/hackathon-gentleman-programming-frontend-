import { Route, Routes } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { Typography } from '@mui/material'

function RoutesWithNotFound({ children }: PropsWithChildren) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<Typography variant='h4'>Not Found</Typography>} />
    </Routes>
  )
}
export default RoutesWithNotFound
