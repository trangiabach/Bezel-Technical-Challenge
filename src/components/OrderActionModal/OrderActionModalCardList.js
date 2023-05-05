import { Box, Typography } from "@mui/material"


const OrderActionModalCardListStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    my: 1.5
}

const OrderActionModalCardListItem = ( {label, value, labelColor, valueColor, boldLabel, boldValue} ) => {
    return (
        <Box sx={OrderActionModalCardListStyle}>
            <Typography 
                sx={{
                    fontSize: {
                        md: '0.85rem',
                        sm: '0.75rem',
                        xs: '0.8rem'
                    },
                    mr: 1,
                    color: (labelColor ? labelColor : 'secondary.main'),
                    fontWeight: (boldLabel ? 'bold' : 'medium')
                }}
            >
                {label}
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        md: '0.85rem',
                        sm: '0.75rem',
                        xs: '0.8rem'
                    },
                    color: (valueColor ? valueColor : 'secondary.main'),
                    fontWeight: (boldValue ? 'bold' : 'medium')
                }}
            >
                {value}
            </Typography>
        </Box>
    )
};

export default OrderActionModalCardListItem;