import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import { Fragment, PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <CssBaseline />
      <Container sx={{ minHeight: '100vh' }}>{children}</Container>
    </Fragment>
  )
}
