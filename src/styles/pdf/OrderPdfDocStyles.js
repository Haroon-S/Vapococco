import { StyleSheet } from '@react-pdf/renderer';
import { primary } from '../common/colors';

// CONSTANTS
const COL_WIDTH = 33.33;
const COL_WIDTH1 = 80;

const textStyles = {
  color: 'black',
  fontSize: '10pt',
};

export const docStyles = StyleSheet.create({
  viewerStyles: {
    width: '100%',
    height: '800px',
  },

  pageContainer: {
    padding: '20px 20px 80px',
    position: 'relative',
    backgroundColor: 'transparent',
  },

  logoContainer: {
    width: '100%',
    marginBottom: '10px',
  },

  logo: {
    maxWidth: '110px',
  },

  headerBox: {
    width: '100%',
    textAlign: 'center',
  },

  heading: {
    color: primary,
    fontSize: '25px',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  watermarkContainer: {
    position: 'absolute',
    top: '35%',
    left: '0',
    opacity: 0.05,
  },
  watermark: { height: '420px', width: '840pt', objectFit: 'contain' },
});

export const pdfReportTableStyles = StyleSheet.create({
  table: {
    width: 'auto',
    marginTop: '20px',
    padding: '10px',
    border: '2px solid grey',
  },

  tableBody: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    opacity: 1,
  },
});

export const pdfReportTableHeadStyles = StyleSheet.create({
  tableHead: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: '2px solid grey',
    Bottom: '3px',
  },

  tableHeadCell1: {
    width: `${COL_WIDTH}%`,
    padding: '10px 5px',
    textAlign: 'left',
    color: 'black',
  },

  tableHeadCell2: {
    width: `${COL_WIDTH}%`,
    padding: '10px 5px',
    textAlign: 'center',
  },

  tableHeadCell: {
    width: `${COL_WIDTH}%`,
    padding: '10px 5px',
    textAlign: 'center',
    color: 'black',
  },

  tableHeadText: { ...textStyles, color: 'black', fontSize: '16px', marginBottom: '4px' },
  tableText: { ...textStyles, fontSize: '14px', color: 'black', },
});

export const pdfTableRowStyles = StyleSheet.create({
  tableRow: {
    width: '100%',
    paddingHorizontal: '5px',
    paddingVertical: '20px',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: '1px solid lightgrey',
    minHeight: '25px',
  },

  tableCol1: {
    width: `${COL_WIDTH1}%`,
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    textAlign: 'left',
  },

  tableCol2: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  tableCol: {
    width: `${COL_WIDTH}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '5px',
  },

  text: { ...textStyles, fontSize: '14px' },
});

export const pdfDocumentFooterStyles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '20px',
    width: '100%',
    textAlign: 'center',
    marginLeft: '40px',
  },

  footerText: {
    fontSize: '9px',
    color: 'grey',
  },
});
