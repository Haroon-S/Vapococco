/* eslint-disable no-unused-vars */

'use client';

import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { getComparator, handleSort } from '@/utilities/helpers';
import OrdersTableHead from './OrdersTableHead';
import { OrderTableHeadCells } from '../utilities/data';
import TableLoaders from '@/app/common/loaders/TableLoaders';
import EmptyRecordTable from '@/app/common/components/EmptyRecordTable';
import withTable from '@/HOC/withTable';
import { useAddOrderAgainMutation, useGetOrdersQuery } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function OrdersTable({ pagination, sorting, onPageChange, onRowsPerPageChange, onRequestSort }) {
  const [addOrder, { error, isSuccess }] = useAddOrderAgainMutation();
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  const router = useRouter();
  const { order, orderBy } = sorting;
  const { rowsPerPage, page } = pagination;
  const { data, isLoading, isFetching } = useGetOrdersQuery();

  const sortedData = handleSort(data, getComparator(order, orderBy));

  const loading = isLoading || isFetching;

  return (
    <Paper sx={{ borderRadius: '10px' }} className=" p-3">
      <TableContainer>
        <Table>
          <OrdersTableHead
            headings={OrderTableHeadCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={onRequestSort}
          />

          {loading && <TableLoaders />}

          {!loading && data?.length > 0 && (
            <TableBody>
              {sortedData?.map(item => (
                <TableRow
                  hover
                  className=" cursor-pointer"
                  onClick={() => router.push(`/orders/${item?.id}`)}
                  key={item?.id}
                >
                  <TableCell>
                    <Stack direction="row" alignItems="center" gap="12px">
                      <Image
                        src={item?.items[0]?.product_image ? item?.items[0]?.product_image : ''}
                        alt="Image"
                        width={70}
                        height={70}
                        className="hidden md:block"
                      />
                      <Typography variant="body1">ORD-{item?.id}</Typography>
                    </Stack>
                  </TableCell>

                  <TableCell>{moment(item?.ordered_date).format('DD MMM,YYYY')}</TableCell>

                  <TableCell>{item?.total_price} $</TableCell>

                  <TableCell>
                    <Button
                      onClick={e => {
                        e.stopPropagation();
                        addOrder({ order_id: item?.id });
                      }}
                      variant="contained"
                    >
                      BUY AGAIN
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
          {!loading && data?.length === 0 && <EmptyRecordTable colSpan={7} />}
        </Table>
      </TableContainer>
    </Paper>
  );
}

OrdersTable.propTypes = {
  pagination: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default withTable(OrdersTable, { sortBy: 'id' });
