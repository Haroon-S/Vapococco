/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Divider, List } from '@mui/material';
import { AccountCircleOutlined, Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import DrawerListItem from './DrawerListItem';

// STYLES
import {
  closeIconButtonStyles,
  muiDrawerStyles,
  drawerContainerBoxStyles,
} from '@/styles/mui/components/navbar-drawer-styles';
import { border, contrastText } from '@/styles/common/colors';
import { menuItems, topbarItems } from '../../utilities/data';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';
import DrawerMenuItem from './DrawerMenuItem';
import SearchInput from '../../common/SearchInput';

function Drawer({ showNavbar, handleShowNavbar }) {
  const { isSupplier } = useGetUserRoles();
  const { userType } = useGetUserRoles();
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const modified = useMemo(() => {
    const filtered = topbarItems.filter(item => {
      if (isAuthenticated) {
        const isAllowed = !item?.onlyPublic;
        return isAllowed;
      }
      const isAllowed = item?.isPublic;
      return isAllowed;
    });
    return filtered;
  }, [userType, isAuthenticated]);

  return (
    <MuiDrawer anchor="left" open={showNavbar} onClose={handleShowNavbar} sx={muiDrawerStyles}>
      <Box
        sx={{ ...drawerContainerBoxStyles, color: contrastText }}
        className="p-3 relative"
        role="presentation"
      >
        <Box className=" flex items-center justify-end w-full">
          {/* <SearchInput themeLight /> */}
          <SearchInput />
          <Close sx={closeIconButtonStyles} className="ms-2" onClick={handleShowNavbar} />
        </Box>

        <List>
          {!isAuthenticated && (
            <>
              <DrawerListItem
                path="/my-products"
                label={checkSelectedLanguageText('MES PRODUITS', 'MY PRODUCTS')}
              />
              <DrawerListItem
                path="/orders"
                label={checkSelectedLanguageText("MA LISTE D'ACHATS", 'CHART LIST')}
              />
            </>
          )}

          <DrawerListItem
            path="/promoted-offers"
            label={checkSelectedLanguageText('OFFER DE LA SEMAINE', 'OFFER OF THE WEEK')}
          />

          <Divider sx={{ borderColor: border }} />

          <DrawerMenuItem label="E-LIQUID" items={menuItems.eliquid} />
          <Divider sx={{ borderColor: border }} />
          <DrawerMenuItem label="DIY" items={menuItems.diy} />
          <Divider sx={{ borderColor: border }} />
          <DrawerMenuItem label="CBD" items={menuItems.cbd} />
        </List>
      </Box>
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  showNavbar: propTypes.bool.isRequired,
  handleShowNavbar: propTypes.func.isRequired,
};

export default Drawer;
