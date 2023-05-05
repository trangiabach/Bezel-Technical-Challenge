import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const OrderActionModalCancelButtonStyles = {
  position: 'absolute',
  top: {
    xs: '-1.5rem',
    sm: '-1.5rem',
  },
  right: {
    xs: '-0.5rem',
    sm: '-2rem',
  },
};

const OrderActionModalCancelButtonIconStyles = {
  color: 'primary.main',
};

const OrderActionModalCancelButton = ({ handleClose }) => {
  return (
    <IconButton onClick={handleClose} sx={OrderActionModalCancelButtonStyles}>
      <CloseIcon sx={OrderActionModalCancelButtonIconStyles} />
    </IconButton>
  );
};

export default OrderActionModalCancelButton;
