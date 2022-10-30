import React, { useReducer } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalActionTypes, modalReducer } from '../reducer/modalReducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
    children: React.ReactNode
    setOpenModal: Function
    state: boolean
}

const ModalJobs = ({children, setOpenModal, state}: Props) => {
	const setOff = () => setOpenModal({type: modalActionTypes.OFF})
    const setOn = () => setOpenModal({type: modalActionTypes.ON})
  return (
    <div>
      <Modal
        open={state}
        onClose={setOff}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {children}
        </Box> 
      </Modal>
    </div>
  );
}

export default ModalJobs
