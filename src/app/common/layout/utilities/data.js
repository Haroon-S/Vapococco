/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  FormatListBulleted,
  Handyman,
  ManageAccounts,
  Groups,
  Engineering,
  Chat,
  Category,
  Diversity3,
  SearchOutlined,
  CalendarTodayOutlined,
  BusinessOutlined,
  CorporateFareOutlined,
} from '@mui/icons-material';
import { v4 } from 'uuid';
import icon10ml from '@/assets/menu-icons/10ml.png';
import icon50mlEtPlus from '@/assets/menu-icons/50ml-et-plus.png';
import iconSelsNicotine from '@/assets/menu-icons/Sels-Nicotine.png';
import iconClassic from '@/assets/menu-icons/Classic.png';
import iconMenthe from '@/assets/menu-icons/Menthe.png';
import iconMixFruits from '@/assets/menu-icons/MIX-FRUITS.png';
import iconMonoFruits from '@/assets/menu-icons/MONO-FRUIT.png';
import iconCocktail from '@/assets/menu-icons/Cocktail.png';
import iconDiyBooster from '@/assets/menu-icons/DIY_BOOSTER.png';
import iconDiyAccessories from '@/assets/menu-icons/DIY-ACCESSOIRES.png';
import iconDiyAdditif from '@/assets/menu-icons/DIY-ADDITIF.png';
import iconDiyBase from '@/assets/menu-icons/DIY-BASE.png';

import { CLIENT, ADMIN, SUPPLIER } from '@/utilities/constants';

export const sidebarCommonItemsData = [
  // {
  //   id: v4(),
  //   title: 'DISCONNECT',
  //   order: 1,
  //   permissions: [CLIENT, SUPPLIER],
  //   isButton: true
  // },
];

export const sidebarAdminItemsData = [
  {
    id: v4(),
    path: '/portal/admin/super-users',
    title: 'Super Users',
    icon: <ManageAccounts />,
    order: 1,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/clients',
    title: 'Clients',
    icon: <Groups />,
    order: 2,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/suppliers',
    title: 'Suppliers',
    icon: <Engineering />,
    order: 3,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/categories',
    title: 'Categories',
    icon: <Category />,
    order: 4,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/orders',
    title: 'Orders',
    icon: <FormatListBulleted />,
    order: 5,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/services',
    title: 'Services',
    icon: <Handyman />,
    order: 6,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/dispute',
    title: 'Dispute',
    icon: <Diversity3 />,
    order: 7,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/chat',
    title: 'Chats',
    icon: <Chat />,
    order: 8,
    permissions: [ADMIN],
  },
];

export const topbarItems = [
  {
    id: v4(),
    path: '/search',
    title: 'Search',
    icon: <SearchOutlined />,
    isPublic: true,
  },
  {
    id: v4(),
    path: '/appointments',
    title: 'Appointments',
    icon: <CalendarTodayOutlined />,
    isPublic: false,
  },
  {
    id: v4(),
    path: '/about',
    title: 'About Booklyz',
    icon: <CorporateFareOutlined />,
    isPublic: true,
  },
  {
    id: v4(),
    path: '/payments/payment-plans',
    title: 'List your business',
    icon: <BusinessOutlined />,
    isPublic: true,
    external: true,
    onlyPublic: true,
  },
];

export const menuItems = {
  eliquid: [
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=10ml',
      title: '10ml',
      icon: icon10ml.src,
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=50ml',
      title: '50ml et +',
      icon: icon50mlEtPlus.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=sels-nicotine',
      title: 'Sels Nicotine',
      icon: iconSelsNicotine.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=classic',
      title: 'Classic',
      icon: iconClassic.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=menthe',
      title: 'Menthe',
      icon: iconMenthe.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=mix-fruits',
      title: 'Mix Fruits',
      icon: iconMixFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=mono-fruits',
      title: 'Mono Fruits',
      icon: iconMonoFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=eliquid&sub_category__category=cocktail',
      title: 'Cocktail',
      icon: iconCocktail.src
    },
  ],
  diy: [
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=Tous-Nos-Aromes',
      title: 'Tous Nos Aromes',
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=classic',
      title: 'Classic',
      icon: iconClassic.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=menthe',
      title: 'Menthe',
      icon: iconMenthe.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=mix-fruits',
      title: 'Mix Fruits',
      icon: iconMixFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=mono-fruits',
      title: 'Mono Fruits',
      icon: iconMonoFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=cocktail',
      title: 'Cocktail',
      icon: iconCocktail.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=base',
      title: 'Base',
      icon: iconDiyAdditif.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=booster',
      title: 'Booster',
      icon: iconDiyAdditif.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=additif',
      title: 'Additif',
      icon: iconDiyAdditif.src
    },
    {
      id: v4(),
      path: '/product?sub_category=diy&sub_category__category=accessories',
      title: 'Accessories',
      icon: iconDiyAdditif.src
    },
  ],
  cbd: [
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=10ml',
      title: '10ml',
      icon: icon10ml.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=50ml',
      title: '50ml et +',
      icon: icon50mlEtPlus.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=sels-nicotine',
      title: 'Sels Nicotine',
      icon: iconSelsNicotine.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=classic',
      title: 'Classic',
      icon: iconClassic.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=menthe',
      title: 'Menthe',
      icon: iconMenthe.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=mix-fruits',
      title: 'Mix Fruits',
      icon: iconMixFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=mono-fruits',
      title: 'Mono Fruits',
      icon: iconMonoFruits.src
    },
    {
      id: v4(),
      path: '/product?sub_category=cbd&sub_category__category=cocktail',
      title: 'Cocktail',
      icon: iconCocktail.src
    },
  ],
};

export const companyListItems = [
  {
    id: v4(),
    path: '/portal/pages/hr/company/profiles',
    title: 'Services',
  },
  {
    id: v4(),
    path: '/portal/pages/hr/company/files',
    title: 'Company Files',
  },
];
