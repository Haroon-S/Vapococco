'use client';

import React from 'react';
import propTypes from 'prop-types';
import { Fade, Menu, MenuItem, MenuList } from '@mui/material';
import Link from 'next/link';
import { topbarMenuStyles } from '@/styles/mui/containers/layout/layout-styles';
// import SubCategoryMenuItem from '../../common/SubCategoryMenuItem';

function CategoryMenu({ anchor = null, categoriesData = [], toggle }) {
  return (
    <Menu
      key={anchor}
      sx={topbarMenuStyles}
      anchorEl={anchor}
      open={!!anchor}
      onClose={toggle}
      TransitionComponent={Fade}
      disablePortal
      disableScrollLock
    >
      <MenuList sx={{ outline: 'none', border: 'none' }} disablePadding>
        {categoriesData?.map(item => (
          <MenuItem onClick={toggle} component={Link} className="resetLink" href="/">
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

CategoryMenu.propTypes = {
  anchor: propTypes.object,
  categoriesData: propTypes.array,
  toggle: propTypes.func.isRequired,
};

export default CategoryMenu;
