/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BorderBottom } from '@mui/icons-material';

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent', // Disable the default indicator
  },
}));

export const CustomTab = styled(Tab)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: 'black',
  fontWeight: '800',
  borderRadius: '8px',
  border: '3px solid black',
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
  margin: '0 1px',
  textTransform: 'none',
  '&.Mui-selected': {
    backgroundColor: 'black',
    color: 'white',
  },
}));
