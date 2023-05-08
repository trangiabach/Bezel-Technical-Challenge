import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal, Fade, Backdrop } from '@mui/material';
import OrderActionModalCard from './OrderActionModalCard';
import OrderActionModalInfo from './OrderActionModalInfo';
import OrderActionModalCancelButton from './OrderActionModalCancelButton';
import { useWindowSize, useElementSize } from '../../utils/hook';
import Spacer from '../common/Spacer';

const OrderActionModal = ({ open, handleClose, orderId }) => {
  const modalContainerStyle = {
    display: 'flex',
    mx: {
      xs: '1.5rem',
      sm: '2.5rem',
    },
    my: {
      xs: '1rem',
      sm: '2rem',
    },
    mt: {
      xs: '2rem',
    },
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center',
    flexDirection: {
      sm: 'row',
      xs: 'column',
    },
  };

  const { width, height } = useWindowSize();
  const modalRef = useRef();
  const modalSize = useElementSize(modalRef);
  const [isModalHeightOverflow, setIsModalHeightOverflow] = useState();

  useEffect(() => {
    if (modalSize.height > height) {
      setIsModalHeightOverflow(true);
    } else {
      setIsModalHeightOverflow(false);
    }
  }, [modalSize.height, height]);

  const modalStyle = {
    position: 'absolute',
    top: {
      xs: isModalHeightOverflow ? 0 : '',
      sm: '50%',
    },
    left: {
      xs: 0,
      sm: '50%',
    },
    bottom: {
      xs: 0,
    },
    transform: {
      xs: 'none',
      sm: 'translate(-50%, -50%)',
    },
    backgroundColor: 'background.default',
    borderRadius: {
      xs: 0,
      sm: '30px',
    },
    borderTopRightRadius: {
      xs: '30px',
    },
    borderTopLeftRadius: {
      xs: '30px',
    },
    width: {
      xs: '100%',
      sm: '98%',
      md: 850,
    },
    height: 'fit-content',
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          overflowY: 'scroll',
        }}
        keepMounted
      >
        <Fade in={open}>
          <Box sx={modalStyle} ref={modalRef}>
            <Box sx={modalContainerStyle}>
              <OrderActionModalInfo orderId={orderId} />
              <Spacer
                y={{
                  xs: 3,
                  sm: 0,
                }}
              />
              <OrderActionModalCard
                orderId={orderId}
                sx={{
                  display: width >= 600 ? 'block' : 'none',
                }}
              />
              <OrderActionModalCancelButton handleClose={handleClose} />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default OrderActionModal;
