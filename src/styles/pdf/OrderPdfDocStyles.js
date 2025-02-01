import { StyleSheet } from '@react-pdf/renderer';

// CONSTANTS
const COL_WIDTH = 33.33;
const COL_WIDTH1 = 25;

export const textStyles = {
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
    height: '100px',
    marginBottom: '10px',
  },

  logo: {
    width: '150px',
    height: '70px',
  },

  headerBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },

  InfoBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  Info1: {
    width: '100%',
    flexBasis: '50%',
  },
  Info2: {
    width: '100%',
    flexBasis: '50%',
  },

  InfoHeading: {
    color: 'black',
    fontSize: '14px',
    fontFamily: 'Helvetica-Bold',
    marginTop: '30px',
    marginBottom: '16px',
  },

  InfoText: {
    marginVertical: '5px',
    textTransform: 'uppercase',
    color: 'black',
    fontSize: '16px',
    fontWeight: 'normal',
  },

  heading: {
    color: 'black',
    fontSize: '18px',
  },
  subHeading: {
    color: '#a5a6ab',
    fontSize: '16px',
    fontWeight: 'semibold',
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
    border: '2px solid grey',
    borderTop: '0px',
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
    backgroundColor: '#f0f0f0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  tableHeadCell1: {
    width: `${COL_WIDTH1}%`,
    padding: '10px 5px',
    textAlign: 'center',
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

  tableHeadText: {
    ...textStyles,
    color: 'black',
    fontSize: '14px',
    marginBottom: '2px',
    fontFamily: 'Helvetica-Bold'
  },
  tableText: { ...textStyles, fontSize: '14px', color: 'black' },
});

export const pdfTableRowStyles = StyleSheet.create({
  tableRow: {
    width: '100%',
    paddingHorizontal: '5px',
    paddingVertical: '10px',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: '1px solid lightgrey',
    minHeight: '25px',
  },

  tableCol1: {
    width: `${COL_WIDTH}%`,
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },

  tableCol2: {
    width: `${COL_WIDTH}%`,
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },

  tableCol: {
    width: `${COL_WIDTH}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '5px',
  },

  text: { ...textStyles, fontSize: '12px' },
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

export const pdfReportCardStyles = StyleSheet.create({
  card: {
    marginTop: '20px',
    width: '50%',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    flexDirection: 'row',
    border: '1px solid black',
  },

  cardLeft: {
    display: 'flex',
    gap: '10px',
    flexBasis: '50%',
    backgroundColor: '#f0f0f0',
    padding: '10px'
  },
  cardRight: {
    display: 'flex',
    gap: '10px',
    flexBasis: '50%',
    backgroundColor: 'white',
    padding: '10px'
  },

  cardText: {
    ...textStyles, fontSize: '12px', textAlign: 'right'
  },
});
