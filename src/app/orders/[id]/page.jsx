'use client';

/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import OrderDetailHeader from './components/OrderDetailHeader';
import OrderProductCard from './components/OrderProductCard';
import { useGetOrdersByNumberQuery } from '@/services/private/orders';
import ExportPdfInvoice from './components/pdf/ExportPdfInvoice';
import useToggle from '@/customHooks/useToggle';

function OrderDetail({ params: { id } }) {
  const { data = [], isLoading, isFetching } = useGetOrdersByNumberQuery(id);
  const [exportingPdf, toggleExportingPdf] = useToggle(false);

  const orderByIdData = useMemo(() => {
    if (data.length > 0) {
      return data.find(order => order.id === Number(id));
    }
    return [];
  }, [data]);

  const handleExportToPdf = async () => {
    toggleExportingPdf(true);
    const doc = <ExportPdfInvoice orderData={orderByIdData} />;

    const pdfBlob = await pdf(doc).toBlob();
    const blobURL = URL.createObjectURL(pdfBlob);
    saveAs(blobURL, 'Order Invoice');
    toggleExportingPdf(false);
  };

  return (
    <Box className=" h-screen pb-20 px-20 flex justify-center">
      <Box className=" mt-[260px] max-w-[1440px] w-full">
        <Box className=" flex justify-between items-center">
          <Typography variant="pageTitle" className=" text-start">
            Commande
          </Typography>
          <Button onClick={handleExportToPdf} disabled={exportingPdf} variant="contained">
            Facture d&apos;exportation {exportingPdf && <CircularProgress size="16px" />}
          </Button>
        </Box>
        <Box className=" mt-4">
          <Box className=" border-2 border-gray-400 p-3">
            <OrderDetailHeader orderData={orderByIdData} />
            <Box className=" mt-10 gap-6 flex flex-col justify-center w-full">
              {orderByIdData?.items?.map(item => (
                <OrderProductCard
                  title={item?.product_title}
                  description={item?.product_description}
                  key={item?.id}
                  image={item?.product_image}
                  price={item?.item_price}
                  quantity={item?.quantity}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

OrderDetail.propTypes = {
  params: PropTypes.object,
};

export default OrderDetail;
