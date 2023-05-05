import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material"
import OrderActionModalCardListItem from "./OrderActionModalCardList";
import Spacer from "../common/Spacer";
import { getModalCardData } from "./api";

const OrderActionModalCardStyles = {
    backgroundColor: '#f9f7f2',
    width: {
        xs: '100%',
        sm: '48%',
    },
    borderRadius: '40px',
    height: 'fit-content'
};

const OrderActionModalCardContainerStyles = {
    mx: '2rem',
};

const OrderActionModalCardImgStyles = {
    borderRadius: '15px',
    width: '4.5rem',
    height: '4.5rem'
}

const OrderActionModalCard = ({ orderId }) => {

    const [modalCardData, setModalCardData ] = useState({});

    useEffect(() => {
        getModalCardData(orderId).then(data => {
            setModalCardData(data)
        })
    }, [])

    return (
        <Box sx={OrderActionModalCardStyles}>
            <Box sx={OrderActionModalCardContainerStyles}>
                <Spacer y={2.5} />
                <Divider />
                <Spacer y={1} />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: {
                                    md: '0.9rem',
                                    sm: '0.8rem',
                                    xs: '0.85rem'
                                },
                                color: 'primary.main'
                            }}
                        >
                            {modalCardData.title}
                        </Typography>
                        <Spacer y={1} />
                        <Typography
                            sx={{
                                fontSize: {
                                    md: '0.8rem',
                                    sm: '0.7rem',
                                    xs: '0.75rem'
                                },
                                color: 'secondary.main'
                            }}
                        >
                            {`${modalCardData.condition} / ${modalCardData.year}`}
                        </Typography>
                    </Box>
                    <Spacer x={2} />
                    <Avatar
                        sx={OrderActionModalCardImgStyles}
                        src={modalCardData.imgSrc}
                    >
                    </Avatar>
                </Box>
                <Spacer y={1} />
                <Divider />
                <Spacer y={1} />
                <OrderActionModalCardListItem
                    label={'Selling Price'}
                    value={modalCardData.sellingPrice}
                    valueColor='primary.main'
                />
                <OrderActionModalCardListItem
                    label={`Level 1 Comission Fee (${modalCardData.commissionPercentage})`}
                    value={modalCardData.commissionFee}
                />
                <OrderActionModalCardListItem
                    label={'Seller Fee'}
                    value={modalCardData.sellerFee}
                />
                <OrderActionModalCardListItem
                    label={'Insured Shipping'}
                    value={modalCardData.insuredShipping ? modalCardData.insuredShipping  : 'Free'}
                />
                <OrderActionModalCardListItem
                    label={'Bezel Authentication'}
                    value={modalCardData.bezelAuthentication ? modalCardData.bezelAuthentication  : 'Free'}
                    labelColor={'success.main'}
                    valueColor={'success.main'}
                 />
                <Spacer y={1} />
                <Divider />
                <Spacer y={1} />
                <OrderActionModalCardListItem
                    label={'Earnings'}
                    value={modalCardData.earnings}
                    boldLabel={true}
                    boldValue={true}
                    labelColor='primary.main'
                    valueColor='primary.main'
                 />
                 <Spacer y={2} />
            </Box>
        </Box>
    )
};

export default OrderActionModalCard;