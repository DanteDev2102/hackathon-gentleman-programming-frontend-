import { Box, CssBaseline } from '@mui/material'
import { Fragment, PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
    </Fragment>
  )
}
