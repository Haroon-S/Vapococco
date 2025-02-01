import { View } from '@react-pdf/renderer';
import propTypes from 'prop-types';
import React from 'react';
import { pdfReportTableStyles } from '@/styles/pdf/OrderPdfDocStyles';
import PdfOrderDetailTableHeader from './PdfOrderDetailTableHeader';
import PdfOrderDetailTableBody from './PdfOrderDetailTableBody';

function ExportPdfOrdersDetailTable({ orderData }) {
  return (
    <View style={pdfReportTableStyles.table}>
      <PdfOrderDetailTableHeader />

      <View style={pdfReportTableStyles.tableBody}>
        <PdfOrderDetailTableBody orderData={orderData} />
      </View>
    </View>
  );
}

ExportPdfOrdersDetailTable.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default ExportPdfOrdersDetailTable;
