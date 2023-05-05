import { useState, useEffect } from "react";
import { Box, Typography, Stack, Button } from "@mui/material"
import OrderActionModalCard from "./OrderActionModalCard";
import { acceptSale, declineSale } from "./api";
import Spacer from "../common/Spacer";

const OrderActionModalInfoStyles = {
    ml: 2,
    width: {
        xs: '100%',
        sm: '40%'
    }
};

const OrderActionModalButtonStyles = {
    borderRadius: '40px',
    fontSize: {
        md: '1rem',
        sm: '0.8rem',
    }
};

const OrderActionModalInfo = ({ orderId }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <Box sx={OrderActionModalInfoStyles}>
            <Spacer y={1} />
            <Box
                sx={{ ml: 2 }}
            >
                <Typography
                    sx={{
                        color: 'secondary.main',
                        fontWeight: 'bold',
                        fontSize: {
                            md: '0.8rem',
                            sm: '0.7rem',
                            xs: '0.75rem'
                        },
                        letterSpacing: '1.5px'
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
                            xs: '1.8rem'
                        },
                        color: 'primary.main'
                    }}
                >
                    Your watch sold!
                </Typography>
                <Spacer y={{
                    sm: 1,
                    xs: 2
                }} />
                <Typography
                    sx={{
                        fontSize: {
                            md: '0.9rem',
                            sm: '0.8rem',
                            xs: '0.85rem'
                        },
                        color: 'secondary.main',
                        lineHeight: 1.5
                    }}
                >
                    You have 1 business day to accept the sale. If you do not accept it, it will be automatically rejected.
                </Typography>
            </Box>
            <Spacer y={{
                xs: 3,
                sm: 6
            }} />
            {width < 600 && (
                <OrderActionModalCard orderId={orderId} />
            )}
            <Spacer y={{
                xs: 3,
                sm: 0
            }} />
            <Stack direction='column' spacing={1}>
                <Button sx={OrderActionModalButtonStyles} variant='contained' onClick={() => acceptSale(orderId)}>
                    Accept Sale
                </Button>
                <Button sx={OrderActionModalButtonStyles} onClick={() => declineSale(orderId)}>
                    Reject Sale
                </Button>
            </Stack>
        </Box>
    )
};

export default OrderActionModalInfo;