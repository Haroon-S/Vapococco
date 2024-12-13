/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from '@react-pdf/renderer';
import { pdfTableRowStyles } from '@/styles/pdf/OrderPdfDocStyles';

function PdfOrderProductCard({ image, title, description, price, quantity }) {
  return (
    <View style={pdfTableRowStyles.tableRow}>
      <View style={pdfTableRowStyles.tableCol1}>
        {image?.src && (
          <View>
            <Image style={{ maxWidth: '50px' }} src={image?.src} />
          </View>
        )}
        <Text style={pdfTableRowStyles.text}>{title}</Text>
        <Text style={pdfTableRowStyles.text}>{description}</Text>
      </View>

      <View style={pdfTableRowStyles.tableCol2}>
        <Text style={pdfTableRowStyles.text}>{price}€</Text>
      </View>
    </View>
  );
}

PdfOrderProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default PdfOrderProductCard;
