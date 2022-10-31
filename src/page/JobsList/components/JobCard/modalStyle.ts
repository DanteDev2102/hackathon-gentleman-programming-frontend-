import { SxProps } from '@mui/material'

export const modalStyle: SxProps = {
  position: 'absolute' as 'absolute',
  borderRadius: '12px',
  top: '0',
  left: '50%',
  display: 'grid',
  transform: 'translate(-50%, 5%)',
  minWidth: 350,
  minHeight: 400,
  maxWidth: 1200,
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  p: '3%',
  bgcolor: 'background.paper',
}

export const buttonStyle: SxProps = {}
