/* eslint-disable no-unused-vars */

'use client';

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Edit } from '@mui/icons-material';
import ServiceTableHead from './ServiceTableHead';
import withTable from '@/HOC/withTable';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { useGetServiceQuery } from '@/services/private/services';
import TableLoaders from '@/app/common/loaders/TableLoaders';
import EmptyRecordTable from '@/app/common/components/EmptyRecordTable';
import { serviceTableHeadCells } from '../utilities/data';

function ServiceTable({
  pagination,
  sorting,
  onPageChange,
  onRowsPerPageChange,
  onRequestSort,
  isSelected,
  onSelectAllRows,
  onSelectRow,
  selected,
  setSelected,
}) {
  const router = useRouter();
  const { isSupplier } = useGetUserRoles();
  const { order, orderBy } = sorting;
  const { rowsPerPage, page } = pagination;
  const { data, isLoading, isFetching } = useGetServiceQuery({
    service_type: 'additional',
    offset: page * rowsPerPage,
    page: page + 1,
    limit: rowsPerPage,
  });

  const loading = isLoading || isFetching;

  return (
    <Paper sx={{ borderRadius: '10px' }} className=" p-3">
      <TableContainer>
        <Table>
          <ServiceTableHead
            headings={serviceTableHeadCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={onRequestSort}
            rowCount={data?.count || 0}
            numSelected={selected?.length}
            onSelectAllRows={e => onSelectAllRows(e, data?.results)}
          />

          {loading && <TableLoaders />}

          {!loading && data?.length > 0 && (
            <TableBody>
              {data?.map(item => {
                const isItemSelected = isSelected(item?.id);

                return (
                  <TableRow
                    hover
                    selected={isItemSelected}
                    className=" cursor-pointer"
                    // onClick={() => router.push(`/portal/orders/detail/${item?.order_number}`)}
                    key={item?.order_number}
                  >
                    <TableCell>
                      <Typography variant="body1">{item?.service_name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{item?.service_sku}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{item?.price}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{item?.service_timing} min</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{item?.service_description} min</Typography>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        onClick={() => {
                          router.push(`/portal/owner/services/edit/${item?.id}`);
                        }}
                        title="Edit"
                        size="small"
                      >
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
          {!loading && data?.length === 0 && <EmptyRecordTable colSpan={7} />}
        </Table>

        <TablePagination
          component={Box}
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[10, 20, 30]}
          onRowsPerPageChange={onRowsPerPageChange}
          onPageChange={onPageChange}
        />
      </TableContainer>
    </Paper>
  );
}

ServiceTable.propTypes = {
  pagination: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  onSelectAllRows: PropTypes.func.isRequired,
  onSelectRow: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default withTable(ServiceTable, { sortBy: 'id' });