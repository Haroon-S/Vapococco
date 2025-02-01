import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { pdfReportTableHeadStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderDetailTableHeader() {
  return (
    <View style={pdfReportTableHeadStyles.tableHead}>
      <View style={pdfReportTableHeadStyles.tableHeadCell}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Numéro de facture</Text>
      </View>
      <View style={pdfReportTableHeadStyles.tableHeadCell}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Date de facturation</Text>
      </View>
      <View style={pdfReportTableHeadStyles.tableHeadCell}>
        <Text style={pdfReportTableHeadStyles.tableHeadText}>Date de commande</Text>
      </View>
    </View>
  );
}

export default PdfOrderDetailTableHeader;
