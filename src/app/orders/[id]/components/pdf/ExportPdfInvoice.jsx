/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

'use client';

import React from 'react';
import propTypes from 'prop-types';
import { Document, Page, Image, View, Text } from '@react-pdf/renderer';
import moment from 'moment';
import ExportPdfOrders from './ExportPdfOrders';
import { docStyles, textStyles } from '@/styles/pdf/OrderPdfDocStyles';
import ExportPdfOrdersDetailTable from './ExportPdfOrdersDetailTable';
import ExportPdfOrderTotalCard from './ExportPdfOrderTotalCard';
import { logoBase } from '@/utilities/common';

function ExportPdfInvoice({ orderData }) {
  return (
    <Document>
      <Page size="A3" style={docStyles.pageContainer}>
        <View style={docStyles.headerBox}>
          <View style={docStyles.logoContainer}>
            <Image style={docStyles.logo} src={logoBase} />
          </View>
          <View style={{ width: '400px', paddingHorizontal: '20px', textAlign: 'right' }}>
            <Text style={docStyles.heading}>FACTURE</Text>
            <Text style={docStyles.subHeading}>{moment(orderData?.ordered_date).format('DD/MM/YYYY')}</Text>
            <Text style={docStyles.subHeading}>{`ORD-${orderData?.id}`}</Text>
          </View>
        </View>
        <View style={docStyles.InfoBox}>
          <View style={docStyles.Info1}>
            <Text style={docStyles.InfoHeading}>Adresse de livraison</Text>
            <Text style={docStyles.InfoText}>{orderData?.shipping_address}</Text>
            <Text style={docStyles.InfoText}>{orderData?.phone}</Text>
          </View>
          <View style={docStyles.Info2}>
            <Text style={docStyles.InfoHeading}>Adresse de facturation</Text>
            <Text style={docStyles.InfoText}>{orderData?.billing_address}</Text>
            <Text style={docStyles.InfoText}>{orderData?.billing_phone}</Text>
          </View>
        </View>
        <ExportPdfOrdersDetailTable orderData={orderData} />
        <ExportPdfOrders orderData={orderData} />
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <ExportPdfOrderTotalCard totalPrice={orderData?.total_price} />
        </View>
        <View style={{ width: '50%', display: 'flex', gap: '2px', marginTop: '20px' }}>
          <Text style={textStyles}>INFORMATION POUR VIREMENT BANCAIRE</Text>
          <Text style={textStyles}>BANQUE : POUYANNE</Text>
          <Text style={textStyles}>IBAN : FR76 1198 9000 0983 9959 0010 106</Text>
          <Text style={textStyles}>BIC : POUYFR21</Text>
        </View>
      </Page>
    </Document>
  );
}

ExportPdfInvoice.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default ExportPdfInvoice;
