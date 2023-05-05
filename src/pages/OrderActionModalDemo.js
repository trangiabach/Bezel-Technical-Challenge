import React, { useState } from 'react';
import { Box, Button, Avatar } from '@mui/material';
import OrderActionModal from '../components/OrderActionModal/OrderActionModal';
import Spacer from '../components/common/Spacer';

const DemoContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const OrderActionModalDemo = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box sx={DemoContainerStyle}>
      <Avatar
        sx={{ width: '3rem', height: '3rem' }}
        src="https://getbezel.mo.cloudinary.net/static\bezel-nav-logo.png?tx=f_auto,c_limit,w_128,q_auto"
      />
      <Spacer y={2} />
      <Button sx={{ width: 200 }} size="medium" variant="contained" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <OrderActionModal open={openModal} handleClose={handleCloseModal} orderId={123} />
    </Box>
  );
};

export default OrderActionModalDemo;
