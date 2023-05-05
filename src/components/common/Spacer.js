import { Box } from '@mui/material';

const Spacer = ({ x, y }) => {
  const SpacerStyles = {
    px: x ? x : 0,
    py: y ? y : 0,
  };
  return <Box sx={SpacerStyles} />;
};

export default Spacer;
