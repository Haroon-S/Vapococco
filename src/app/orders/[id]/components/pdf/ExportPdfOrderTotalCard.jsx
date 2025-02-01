import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import PropTypes from 'prop-types';
import { pdfReportCardStyles } from '@/styles/pdf/OrderPdfDocStyles';

function ExportPdfOrderTotalCard({ totalPrice }) {
  return (
    <View style={pdfReportCardStyles.card}>
      <View style={pdfReportCardStyles.cardLeft}>
        <Text style={{ ...pdfReportCardStyles.cardText, fontFamily: 'Helvetica-Bold' }}>Total produits </Text>
        <Text style={{ ...pdfReportCardStyles.cardText, fontFamily: 'Helvetica-Bold' }}>Total (HT)</Text>
        <Text style={{ ...pdfReportCardStyles.cardText, fontFamily: 'Helvetica-Bold' }}>Total</Text>
      </View>
      <View style={pdfReportCardStyles.cardRight}>
        <Text style={pdfReportCardStyles.cardText}>{totalPrice}</Text>
        <Text style={pdfReportCardStyles.cardText}>{totalPrice}</Text>
        <Text style={pdfReportCardStyles.cardText}>{totalPrice}</Text>
      </View>
    </View>
  );
}

ExportPdfOrderTotalCard.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default ExportPdfOrderTotalCard;
