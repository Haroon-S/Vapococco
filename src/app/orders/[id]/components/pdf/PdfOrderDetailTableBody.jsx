import { Text, View } from '@react-pdf/renderer';
import propTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { pdfTableRowStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderDetailTableBody({ orderData }) {
  return (
    <View style={pdfTableRowStyles.tableRow}>
      <View style={pdfTableRowStyles.tableCol1}>
        <Text style={pdfTableRowStyles.text}>{`ORD-${orderData?.id}`}</Text>
      </View>

      <View style={pdfTableRowStyles.tableCol1}>
        <Text style={pdfTableRowStyles.text}>{moment(orderData?.ordered_date).format('DD/MM/YYYY')}</Text>
      </View>
      <View style={pdfTableRowStyles.tableCol1}>
        <Text style={pdfTableRowStyles.text}>{moment(orderData?.ordered_date).format('DD/MM/YYYY')}</Text>
      </View>
    </View>
  );
}

PdfOrderDetailTableBody.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default PdfOrderDetailTableBody;
