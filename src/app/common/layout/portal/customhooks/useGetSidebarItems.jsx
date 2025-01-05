'use client';

/* eslint-disable no-unused-vars */
import { Dashboard } from '@mui/icons-material';
import React, { useMemo } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { v4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { companyListItems, sidebarCommonItemsData, sidebarAdminItemsData } from '../../utilities/data';
import { menuPositionProps } from '../../utilities/helperProps';
import useGetMenuHandlers from '@/customHooks/useGetMenuHandlers';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { ADMIN, CLIENT, SUPPLIER } from '@/utilities/constants';
import useAuth from '@/customHooks/useAuth';

function useGetSidebarItems() {
  // COMPONENTS STATE WITH HANDLER FUNCTIONS
  const { userType } = useGetUserRoles();
  const { handleLogout } = useAuth();
  const router = useRouter();
  const [companyMenu, handleOpenCompanyMenu, handleCloseCompanyMenu] = useGetMenuHandlers();

  const logout = async () => {
    await handleLogout();
    router.push('/');
  };

  const sidebarItems = useMemo(
    () => [
      {
        id: v4(),
        path: '/portal/profile',
        title: 'MON PROFIL',
        order: 0,
        permissions: [SUPPLIER, CLIENT, ADMIN],
      },
      {
        id: v4(),
        path: null,
        title: 'DÉCONNEXION',
        order: 1,
        onClick: logout,
        permissions: [CLIENT, SUPPLIER],
        isMenu: true,
      },
      ...sidebarCommonItemsData,
      // ...sidebarAdminItemsData,
    ],
    [userType]
  );

  // MENU JSX
  const companyMenuJSX = () => (
    <Menu
      key={v4()}
      anchorEl={companyMenu}
      open={!!companyMenu}
      onClose={handleCloseCompanyMenu}
      {...menuPositionProps}
    >
      {companyListItems?.map(item => (
        <MenuItem key={item?.id} onClick={handleCloseCompanyMenu} path={item?.path}>
          {item?.title}
        </MenuItem>
      ))}
    </Menu>
  );

  return [sidebarItems, [companyMenuJSX()]];
}

export default useGetSidebarItems;
