import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'
import React, { Fragment, PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <CssBaseline />
      <Container>{children}</Container>
    </Fragment>
  )
}
