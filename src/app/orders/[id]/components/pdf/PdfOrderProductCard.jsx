/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from '@react-pdf/renderer';
import { pdfTableRowStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderProductCard({ title, unitPrice, price, quantity }) {
  return (
    <View style={pdfTableRowStyles.tableRow}>
      <View style={pdfTableRowStyles.tableCol2}>
        <Text style={pdfTableRowStyles.text}>{title}</Text>
      </View>

      <View style={pdfTableRowStyles.tableCol2}>
        <Text style={pdfTableRowStyles.text}>{unitPrice}$</Text>
      </View>

      <View style={pdfTableRowStyles.tableCol2}>
        <Text style={pdfTableRowStyles.text}>{quantity}</Text>
      </View>

      <View style={pdfTableRowStyles.tableCol2}>
        <Text style={pdfTableRowStyles.text}>{price}$</Text>
      </View>
    </View>
  );
}

PdfOrderProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default PdfOrderProductCard;
