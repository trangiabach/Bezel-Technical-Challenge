import { useState } from 'react';
import { Box, Typography, Stack, Alert, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import OrderActionModalCard from './OrderActionModalCard';
import Spacer from '../common/Spacer';
import { acceptSale, declineSale } from './api';
import { useWindowSize } from '../../utils/hook';

const OrderActionModalInfoStyles = {
  ml: 2,
  width: {
    xs: '100%',
    sm: '40%',
  },
};

const OrderActionModalButtonStyles = {
  borderRadius: '40px',
  fontSize: {
    md: '1rem',
    sm: '0.8rem',
  },
};

const OrderActionModalInfo = ({ orderId, handleClose }) => {
  const { width } = useWindowSize();

  const [isAcceptLoading, setAcceptLoading] = useState(false);

  const [isDeclineLoading, setDeclineLoading] = useState(false);

  const [notification, setNotification] = useState({});

  const buttonsLoadingBehaviorStyles = {
    pointerEvents: isAcceptLoading || isDeclineLoading ? 'none' : 'auto',
    opacity: isAcceptLoading || isDeclineLoading ? '0.5' : '1',
    transition: 'opacity 0.5s ease',
  };

  return (
    <Box sx={OrderActionModalInfoStyles}>
      <Spacer y={1} />
      <Box sx={{ mx: 2 }}>
        <Typography
          sx={{
            color: 'secondary.main',
            fontWeight: 'bold',
            fontSize: {
              md: '0.8rem',
              sm: '0.7rem',
              xs: '0.75rem',
            },
            letterSpacing: '1.5px',
          }}
        >
          CONGRATS!
        </Typography>
        <Spacer y={0.5} />
        <Typography
          sx={{
            fontSize: {
              md: '1.8rem',
              sm: '1.5rem',
              xs: '1.8rem',
            },
            color: 'primary.main',
          }}
        >
          Your watch sold!
        </Typography>
        <Spacer
          y={{
            sm: 1,
            xs: 2,
          }}
        />
        <Typography
          sx={{
            fontSize: {
              md: '0.9rem',
              sm: '0.8rem',
              xs: '0.85rem',
            },
            color: 'secondary.main',
            lineHeight: 1.5,
          }}
        >
          You have 1 business day to accept the sale. If you do not accept it, it will be automatically rejected.
        </Typography>
      </Box>
      <Spacer
        y={{
          xs: 3,
          sm: 6,
        }}
      />
      <OrderActionModalCard
        orderId={orderId}
        sx={{
          display: width < 600 ? 'block' : 'none',
        }}
      />
      <Spacer
        y={{
          xs: 3,
          sm: 0,
        }}
      />
      <Stack direction="column" spacing={1} sx={buttonsLoadingBehaviorStyles}>
        {notification.msg ? (
          <>
            <Alert severity={notification.severity}>{notification.msg}</Alert>
            <Button onClick={() => setNotification({})}>Not sure? Decide again!</Button>
          </>
        ) : (
          <>
            <LoadingButton
              loading={isAcceptLoading}
              sx={OrderActionModalButtonStyles}
              variant="contained"
              onClick={() => acceptSale(orderId, setAcceptLoading, setNotification)}
            >
              Accept Sale
            </LoadingButton>
            <LoadingButton
              loading={isDeclineLoading}
              sx={OrderActionModalButtonStyles}
              onClick={() => declineSale(orderId, setDeclineLoading, setNotification)}
            >
              Reject Sale
            </LoadingButton>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default OrderActionModalInfo;
