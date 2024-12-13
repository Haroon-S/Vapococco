/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { View } from '@react-pdf/renderer';
import PdfOrderDetailHeader from './PdfOrderDetailHeader';
import PdfOrderProductCard from './PdfOrderProductCard';
import { pdfReportTableStyles } from '@/styles/pdf/OrderPdfDocStyles';

function ExportPdfOrders({ orderData }) {
  return (
    <View style={pdfReportTableStyles.table}>
      <PdfOrderDetailHeader orderData={orderData} />

      <View style={pdfReportTableStyles.tableBody}>
        {orderData?.items?.map(item => (
          <PdfOrderProductCard
            key={item?.id}
            title={item?.product_title}
            description={item?.product_description}
            image={item?.product_image}
            price={item?.item_price}
            quantity={item?.quantity}
          />
        ))}
      </View>
    </View>
  );
}

ExportPdfOrders.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default ExportPdfOrders;
