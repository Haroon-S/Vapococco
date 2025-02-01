import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { pdfReportTableHeadStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderDetailHeader() {
  return (
    <View style={pdfReportTableHeadStyles.tableHead}>
      <View style={pdfReportTableHeadStyles.tableHeadCell1}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Produit</Text>
      </View>
      <View style={pdfReportTableHeadStyles.tableHeadCell1}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Prix unitaire (HT)</Text>
      </View>
      <View style={pdfReportTableHeadStyles.tableHeadCell1}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Quantit é</Text>
      </View>
      <View style={pdfReportTableHeadStyles.tableHeadCell1}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Total (HT)</Text>
      </View>
    </View>
  );
}

export default PdfOrderDetailHeader;
