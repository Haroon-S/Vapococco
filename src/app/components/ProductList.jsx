import { Box, Pagination, Typography } from '@mui/material';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useGetProductsQuery } from '@/services/private/product';
import SectionLoader from '../common/loaders/SectionLoader';
import Product from './Product';

function ProductList({ filter }) {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetProductsQuery({
    [filter]: true,
    offset: (page - 1) * rowsPerPage,
    page,
    limit: rowsPerPage,
  });

  const handleChangePagination = newPage => {
    setPage(newPage);
  };

  const loading = isLoading || isFetching;
  return (
    <Box>
      {loading && <SectionLoader />}
      {!loading &&
        data?.results?.length > 0 &&
        data?.results?.map(item => (
          <Product
            id={item?.id}
            isFavorite={item?.is_favorite}
            inStock={item?.is_in_stock}
            color={item?.color_code || '#886142'}
            variations={item?.variations}
            sizes={item?.sizes}
            image={item?.images[0]}
            title={item?.title}
            description={item?.short_description}
            price={item?.sale_price}
            rating={4}
          />
        ))}

      {!loading && data?.results?.length === 0 && (
        <Box p={2} sx={{ height: '30vh' }} className=" w-full flex justify-center items-center">
          <Typography variant="body1">No Record Found!</Typography>
        </Box>
      )}
      {!loading && data?.results?.length > 0 && (
        <Box className=" w-full flex items-center justify-start py-5">
          <Pagination
            color="primary"
            shape="rounded"
            count={data ? Math.ceil(data.count / rowsPerPage) : 1}
            page={page}
            onChange={(e, newPage) => handleChangePagination(newPage)}
          />
        </Box>
      )}
    </Box>
  );
}

ProductList.propTypes = {
  filter: propTypes.string,
};

export default ProductList;
