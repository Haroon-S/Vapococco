import { border, dark, grey, primary } from '@/styles/common/colors';

const miniVariantWidth = '220px';
export const getListItemBtnStyles = (isActive = false) => ({
  mx: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  color: isActive ? primary : grey,
  background: 'transparent',
  borderBottom: '1px solid',
  borderBottomColor: border,
  my: '10px',
  flexDirection: 'column',
  transition: '0.2s ease-in-out',
  // position: 'relative',
  borderRadius: '0px',

  '&:hover': {
    background: '#ebebeb',
    color: dark,
    '& svg': {
      color: primary,
      fill: primary,

      '& path': {
        fill: dark,
      },
    },
  },

  '& svg': {
    width: '22px',
    height: '22px',

    '& path': {
      fill: isActive ? dark : 'white',
    },
  },

  '@media screen and (max-width: 768px)': {
    minHeight: 50,
    px: 1,
    mx: '5px',

    '& .MuiTypography-root': {
      display: 'none',
      fontSize: '13px',
      transition: '0.2s ease-in-out',
    },
  },
});

export const listItemMenuArrowStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translateY(40%)',
  fontSize: '18px',
};

export const sidebarMenuStyles = {
  '& .MuiPaper-root': {
    borderRadius: '0',
    boxShadow: '3px 0px 10px lightgrey',
    width: '180px',
  },
};

export const getSidebarWrapperStyles = (isSidebarCollapsed, drawerWidth) => ({
  position: 'fixed',
  top: '0',
  bottom: '0',
  borderRadius: '20px',
  background: 'white',
  color: grey,
  fontSize: '20px',
  overflowX: 'hidden',
  transition: '0.2s ease-in-out',
  whiteSpace: 'nowrap',
  boxShadow: '2px 0px 10px #b3b3b3',
  height: 'fit-content',
  marginTop: '300px',
  marginRight: '1020px',
  // zIndex: 0,
  '::-webkit-scrollbar': { width: '3px' },
  '::-webkit-scrollbar-thumb': { background: primary },
  width: isSidebarCollapsed ? miniVariantWidth : drawerWidth,

  '@media screen and (max-width: 768px)': {
    width: isSidebarCollapsed ? miniVariantWidth : 0,
  },
});

export const getBoxWrapperStyles = isSidebarCollapsed => ({
  minHeight: 'calc(100vh - 195px)',
  padding: '105px 25px 35px 25px',
  marginTop: '195px',
  transition: '0.2s ease-in-out',

  '@media screen and (max-width: 768px)': {
    marginLeft: isSidebarCollapsed ? miniVariantWidth : 0,
  },
});

export const topbarMenuStyles = {
  '& .MuiPaper-root': {
    minWidth: '100px',
    marginTop: '10px',
    borderRadius: '0',
  },
};

export const subCategoryMenuMenuStyles = {
  '& .MuiBackdrop-root': {
    display: 'none',
    pointerEvents: 'none',
  },
};

export const notificationMenuStyles = {
  '& .MuiPaper-root': {
    minWidth: '400px',
    marginTop: '10px',
    borderRadius: '10px',
  },
};
