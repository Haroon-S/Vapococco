/* eslint-disable no-nested-ternary */
import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/containers/layout/navbar.module.scss';

function NavLinkItem({
  label,
  id = '',
  path = '',
  navClassName = '',
  toggle = () => {},
  icon = null,
  isSelected = false,
  external = false,
  menu = false,
}) {
  const currentPath = usePathname();
  const isActive = path === currentPath;

  const getNavLinkClassName = useCallback(() => {
    if (isActive || isSelected) {
      return `${styles.activeNavLink}`;
    }
    return `${styles.navbarNavItem}`;
  }, [currentPath, isSelected]);

  return (
    <Box
      onMouseEnter={() => (menu ? toggle(id) : toggle(''))}
      className={`${navClassName || getNavLinkClassName()} hover flex items-center gap-1 mx-2 cursor-pointer`}
    >
      <Typography variant="body3" fontSize="inherit" fontWeight="inherit" color="inherit">
        {!menu ? (
          external ? (
            <a href={path} target="_blank" rel="noopener noreferrer">
              <span className=" mr-1">{icon}</span>
              {label}
            </a>
          ) : (
            <Link href={path}>
              <span className=" mr-1">{icon}</span>
              {label}
            </Link>
          )
        ) : (
          label
        )}
      </Typography>
    </Box>
  );
}

NavLinkItem.propTypes = {
  id: propTypes.string,
  path: propTypes.string,
  label: propTypes.string.isRequired,
  icon: propTypes.element,
  navClassName: propTypes.string,
  menu: propTypes.bool,
  isSelected: propTypes.bool,
  external: propTypes.bool,
  toggle: propTypes.func,
};

export default NavLinkItem;
