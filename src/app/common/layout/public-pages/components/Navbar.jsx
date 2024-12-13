'use client';

/* eslint-disable no-unused-vars */

import { Avatar, Box, Button, CircularProgress, IconButton, Modal, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AccountCircleOutlined, Call, Inventory, Menu, ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Image from 'next/image';

// STYLES & ASSETS
import { usePathname, useRouter } from 'next/navigation';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { User } from 'lucide-react';
import uk from '@/assets/countries-icons/united-kingdom.png';
import styles from '@/styles/containers/layout/portal/topbar.module.scss';
import { grey, statusOnline } from '@/styles/common/colors';
import logo from '@/assets/Vaprico.svg';

// CUSTOM HOOKS
import useGetMenuHandlers from '@/customHooks/useGetMenuHandlers';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { AUTHENTICATED } from '@/utilities/constants';
import { menuItems, topbarItems } from '../../utilities/data';
import NavLinkItem from './NavLinkItem';
import ProfileMenu from '../../common/ProfileMenu';
import Drawer from './Drawer';
import CommonFilterForm from '@/app/common/components/CommonFilterForm';
import GoogleTranslator from '@/app/common/components/GoogleTranslator';
import Error from '@/app/error';
import CategoryMenu from '../../common/CategoryMenu';
import MenuLinkItem from './MenuLinkItem';
import SearchInput from '../../common/SearchInput';
import { fileViewModalStyles, formModalStyles } from '@/styles/mui/common/modal-styles';
import ModalHeader from '@/app/common/components/ModalHeader';
import AuthModalHeader from '@/app/common/components/AuthModalHeader';
import SignInForm from '@/app/auth/signin/components/SignInForm';
import SignUpForm from '@/app/auth/signup/components/SignUpForm';
import { useLoginMutation, useSignUpMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useGetCartQuery } from '@/services/private/cart';

function Navbar({ toggleSidebar = () => {}, isPortal = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const isSearchPage = pathname.includes('/search');

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { userType } = useGetUserRoles();

  // STATE HOOKS
  const [modalOpen, setModalOpen] = useState({ open: false, type: '' });
  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  // MEMO
  const currentMenuItems = useMemo(() => {
    if (selectedMenu) {
      return menuItems[selectedMenu];
    }

    return [];
  }, [selectedMenu]);

  // API HOOKS
  const [signUp, { error, isSuccess }] = useSignUpMutation();
  const [signIn, { error: loginError, isSuccess: loginSuccess }] = useLoginMutation();
  useHandleApiResponse(error, isSuccess, 'The account activation link has been sent to your email');
  useHandleApiResponse(loginError, loginSuccess, 'Logged In Successfully!');

  const { data, isLoading, isFetching } = useGetCartQuery();
  const loading = isLoading || isFetching;

  const menuRef = useRef(null);

  //   MENU HANDLERS
  const [topbarMenu, handleOpenMenu, handleCloseMenu] = useGetMenuHandlers();

  const [categoryMenu, handleOpenCategoryMenu, handleCloseCategoryMenu] = useGetMenuHandlers();

  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  const handleMenuSelect = menuId => setSelectedMenu(menuId);

  const toggleHovering = () => setIsHovering(prev => !prev);

  const toggleModalOpen = type => setModalOpen({ open: true, type });

  const toggleModalClose = () => setModalOpen({ open: false, type: '' });

  const handleClickOutside = event => {
    // Check if the click is outside the menu box
    setIsHovering(false);
    setSelectedMenu(''); // Close the menu
  };

  // const modifiedMenuItem = useMemo(() => (selectedMenu ? menuItems[selectedMenu] : []), [selectedMenu]);

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleClickOutside}
      className={styles.navbarContainer}
    >
      <Box sx={{ height: 'fit-content', position: 'relative' }} className={styles.topbar}>
        <Box className=" absolute -top-5 right-0 w-44 bg-black flex flex-col items-center justify-center gap-2 p-5 rounded-b-full rounded-t-none">
          <Box className=" flex items-center gap-2">
            <ShoppingCart style={{ color: grey }} />
            <Typography variant="h6" className=" text-grey font-medium">
              PANIER
            </Typography>
          </Box>
          {data?.items?.length > 0 && !loading && (
            <Typography variant="body1" className=" text-white font-semibold ">
              {data?.items?.length} article
            </Typography>
          )}
          {data?.items?.length === 0 && !loading && (
            <Typography variant="body1" className=" text-white font-semibold ">
              0 article
            </Typography>
          )}
          {loading && <CircularProgress size={22} />}
        </Box>
        <Box className=" flex justify-between mr-[180px]">
          <SearchInput />
          <Box className=" flex items-start gap-1">
            {/* <Image
              src={uk.src}
              alt="country icon"
              width={20}
              height={20}
            /> */}
            <ErrorBoundary errorComponent={<Error />}>
              <GoogleTranslator />
            </ErrorBoundary>
            <Link href="/">
              <Box className=" bg-[#e5dcd3] rounded-full flex justify-center items-center w-10 h-10">
                <Call style={{ fontSize: '20px' }} />
              </Box>
            </Link>
            <Link href="/orders">
              <Box className=" bg-[#e5dcd3] rounded-full flex justify-center items-center w-10 h-10">
                <Inventory style={{ fontSize: '20px' }} />
              </Box>
            </Link>
            <Box
              onClick={() => (isAuthenticated ? router.push(`/portal/profile/${user?.username}`) : toggleModalOpen('signin'))}
              className=" bg-[#e5dcd3] rounded-full flex justify-center items-center w-10 h-10 cursor-pointer"
            >
              <User style={{ fontSize: '20px' }} />
            </Box>
          </Box>
        </Box>
        <Box className=" w-full mt-8 flex justify-center items-center gap-8">
          <NavLinkItem
            id="mes-produits"
            toggle={handleMenuSelect}
            label="Mes Produits"
            path="/mes-produits"
          />
          <NavLinkItem
            id="eliquid"
            label="E-LIQUID"
            toggle={handleMenuSelect}
            isSelected={selectedMenu === 'eliquid'}
            menu
          />
          <NavLinkItem
            id="diy"
            label="DIY"
            toggle={handleMenuSelect}
            isSelected={selectedMenu === 'diy'}
            menu
          />
          <NavLinkItem
            id="cbd"
            label="CBD"
            toggle={handleMenuSelect}
            isSelected={selectedMenu === 'cbd'}
            menu
          />
          <Box component={Link} href="/" className="overflow-hidden px-16">
            <Image
              src={logo.src}
              alt="Logo"
              width={200}
              height={200}
              // className="animate-slide-down"
            />
          </Box>
          <NavLinkItem id="chart-list" label="Chart List" path="/orders" toggle={handleMenuSelect} />
          <NavLinkItem
            id="offre-semaine"
            label="Offre De La Semaine"
            path="/promoted-offers"
            toggle={handleMenuSelect}
          />
        </Box>
        <Box className=" w-full flex justify-center">
          {currentMenuItems.length > 0 && isHovering && (
            <Box className=" w-fit min-w-full flex flex-grow items-center justify-center gap-1 absolute top-[100%] bg-black text-white px-10 py-6 rounded-b-2xl shadow-lg">
              {currentMenuItems?.map(item => (
                <MenuLinkItem
                  label={item.title}
                  path={item.path}
                  icon={item.icon}
                  menu={item?.menu}
                  toggle={handleOpenCategoryMenu}
                  external={item.external}
                  key={item.path}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{ paddingTop: isSearchPage ? '10px' : '0px' }}
          className="flex items-center justify-center h-full"
        >
          {/* <Box className=" flex justify-center items-center gap-2">
            <Menu className="block xl:hidden cursor-pointer" onClick={handleShowNavbar} />
          </Box> */}
        </Box>

        <ProfileMenu anchorEl={topbarMenu} handleClose={handleCloseMenu} />
        {/* <CategoryMenu anchor={categoryMenu} toggle={handleCloseCategoryMenu} categoriesData={menuItems[selectedMenu]} /> */}
        <Drawer key={showNavbar} showNavbar={showNavbar} handleShowNavbar={handleShowNavbar} />
        <Modal open={modalOpen.open} onClose={toggleModalClose}>
          <Box sx={{ ...fileViewModalStyles, paddingX: '20px', paddingY: '40px', width: '900px' }}>
            <AuthModalHeader
              title={
                modalOpen.type === 'signin'
                  ? 'Access your business account'
                  : 'Request access to business space'
              }
            >
              <Box className=" w-full m-8 p-8 border-2 border-grey">
                {modalOpen.type === 'signin' ? (
                  <SignInForm toggle={toggleModalOpen} handler={signIn} closeModal={toggleModalClose} />
                ) : (
                  <SignUpForm toggle={toggleModalOpen} handler={signUp} closeModal={toggleModalClose} />
                )}
              </Box>
            </AuthModalHeader>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  toggleSidebar: propTypes.func,
  isPortal: propTypes.bool,
};

export default Navbar;
