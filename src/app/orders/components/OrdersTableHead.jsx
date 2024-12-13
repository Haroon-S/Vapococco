import React from 'react';
import propTypes from 'prop-types';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

function OrdersTableHead({ headings, order, orderBy, onRequestSort }) {
  return (
    <TableHead>
      <TableRow>
        {headings?.map(cell => (
          <TableCell
            colSpan={cell?.colSpan || null}
            padding={cell?.disablePadding ? 'none' : 'normal'}
            key={cell?.id}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={order}
              onClick={() => onRequestSort(cell.id)}
              sx={{ whiteSpace: 'nowrap' }}
            >
              {cell?.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrdersTableHead.propTypes = {
  headings: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
      label: propTypes.string.isRequired,
      renderColumn: propTypes.func,
      clickable: propTypes.bool,
      disablePadding: propTypes.bool,
      colSpan: propTypes.number,
    })
  ).isRequired,
  order: propTypes.string.isRequired,
  orderBy: propTypes.string.isRequired,
  onRequestSort: propTypes.func.isRequired,
};

export default OrdersTableHead;
