import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import OrderActionModal from "../components/OrderActionModal/OrderActionModal";

const DemoContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

const OrderActionModalDemo = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false);

    return (
        <Box sx={DemoContainerStyle}>
            <Button size="large" variant="contained" onClick={handleOpenModal}>Open Modal</Button>
            <OrderActionModal 
            open={openModal}
            handleClose={handleCloseModal}
            orderId={123}
            />
        </Box>
    )
}

export default OrderActionModalDemo;