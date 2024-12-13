import React from 'react';
import propTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import moment from 'moment';
import { pdfReportTableHeadStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderDetailHeader({ orderData }) {
  return (
    <View style={pdfReportTableHeadStyles.tableHead}>
      <View
        key={orderData?.id}
        style={pdfReportTableHeadStyles.tableHeadCell}
      >
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Shipped</Text>
        <Text style={pdfReportTableHeadStyles.tableText}>{moment(orderData?.ordered_date).format('DD MMM,YYYY')}</Text>
      </View>
      <View
        key={orderData?.id}
        style={pdfReportTableHeadStyles.tableHeadCell}
      >
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Order number</Text>
        <Text style={pdfReportTableHeadStyles.tableText}>ORD-{orderData?.id}</Text>
      </View>
      <View
        key={orderData?.id}
        style={pdfReportTableHeadStyles.tableHeadCell}
      >
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Total price</Text>
        <Text style={pdfReportTableHeadStyles.tableText}>{orderData?.total_price}</Text>
      </View>
    </View>
  );
}

PdfOrderDetailHeader.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default PdfOrderDetailHeader;
