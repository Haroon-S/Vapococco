import { Accordion, AccordionDetails, AccordionSummary, ListItem, Typography } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

function DrawerMenuItem({ label, items }) {
  return (
    <ListItem className="px-0 notranslate">
      <Accordion
        className=" w-full"
        sx={{ boxShadow: 'none', border: 'none !important', borderRadius: '0 !important' }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="ps-0 w-full !m-0 !py-0 rounded-none"
        >
          <Typography
            className="mx-2 w-full flex justify-between flex-grow font-semibold text-white notranslate"
            variant="body1"
          >
            {label}{' '}
            <span>
              <ChevronDown />
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className=" flex flex-col gap-2 !m-0 !py-0">
          {items?.map(item => (
            <Link className="text-white notranslate" href={item?.path}>
              {item?.title}
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}

DrawerMenuItem.propTypes = {
  label: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
};

export default DrawerMenuItem;
