import axios from 'axios';

axios.defaults.baseURL = 'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io';

const formatPrice = (price) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return Number(price).toLocaleString('en', options);
};

const formatCentsToDollarPrice = (price) => {
  const newPrice = formatPrice(price / 100);
  return '$' + newPrice;
};

const formatCondition = (condition) => {
  const firstLetter = condition.charAt(0);
  const newCondition = firstLetter + condition.slice(1).toLowerCase();
  return newCondition;
};

const preprocessModalCardData = (data) => {
  const commissionPercentage = data.commissionRateBips / 100;
  const commissionFee = (data.salePriceCents * commissionPercentage) / 100;

  const newData = {
    title: [
      data.listing.model.brand.displayName,
      data.listing.model.displayName,
      data.listing.model.referenceNumber,
    ].join(' '),
    condition: formatCondition(data.listing.condition),
    year: data.listing.manufactureYear,
    commissionPercentage: commissionPercentage.toFixed(1) + '%',
    commissionFee: formatCentsToDollarPrice(commissionFee),
    sellingPrice: formatCentsToDollarPrice(data.salePriceCents),
    sellerFee: formatCentsToDollarPrice(data.sellerFeeCents),
    earnings: formatCentsToDollarPrice(data.payoutAmountCents),
    imgSrc: data.listing.images[0].image.url,
  };
  return newData;
};

const getModalCardData = async (orderId) => {
  const { data } = await axios.get(`/marketplace/orders/${orderId}`);
  return preprocessModalCardData(data);
};

const acceptSale = async (orderId, setLoading, setNotification) => {
  setLoading(true);
  try {
    const { data } = await axios.post(`/marketplace/orders/${orderId}/accept`);
    setLoading(false);
    setNotification({
      msg: 'Sale Accepted!',
      severity: 'success',
    });
    return data;
  } catch {
    setLoading(false);
    setNotification({
      msg: 'An error occured. Please try again!',
      severity: 'error',
    });
    return;
  }
};

const declineSale = async (orderId, setLoading, setNotification) => {
  setLoading(true);
  try {
    const { data } = await axios.post(`/marketplace/orders/${orderId}/decline`);
    setLoading(false);
    setNotification({
      msg: 'Sale Declined!',
      severity: 'warning',
    });
    return data;
  } catch {
    setLoading(false);
    setNotification({
      msg: 'An error occured. Please try again!',
      severity: 'error',
    });
    return;
  }
};

export { getModalCardData, acceptSale, declineSale };
