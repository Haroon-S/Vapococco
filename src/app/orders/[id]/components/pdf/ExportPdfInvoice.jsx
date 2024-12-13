/* eslint-disable no-unused-vars */

'use client';

import React from 'react';
import propTypes from 'prop-types';
import { Document, Page, Image, View, Text } from '@react-pdf/renderer';

import logo from '@/assets/Vaprico.svg';
import ExportPdfOrders from './ExportPdfOrders';
import { docStyles } from '@/styles/pdf/OrderPdfDocStyles';

function ExportPdfInvoice({ orderData }) {
  return (
    <Document>
      <Page size="A3" style={docStyles.pageContainer}>
        {/* <View style={docStyles.logoContainer}>
          <Image style={docStyles.logo} src={logo} />
        </View> */}

        <View style={docStyles.headerBox}>
          <Text style={docStyles.heading}>Order Invoice</Text>
        </View>
        <ExportPdfOrders orderData={orderData} />
      </Page>
    </Document>
  );
}

ExportPdfInvoice.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default ExportPdfInvoice;
