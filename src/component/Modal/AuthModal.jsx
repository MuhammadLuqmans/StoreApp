import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import LoginForm from '../SignUp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#9cb5cda6',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px'
};

export default function BasicModal({openLoginModal , handleCloseLogin, handleOpenLogin }) {
  

  return (
    <div>
      <Modal
        open={openLoginModal}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm />
        </Box>
      </Modal>
    </div>
  );
}
