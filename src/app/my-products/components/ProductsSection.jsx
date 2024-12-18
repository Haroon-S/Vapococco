'use client';

import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Box, Pagination, Typography } from '@mui/material';
import Product from '@/app/components/Product';
import SectionLoader from '@/app/common/loaders/SectionLoader';
import WhyUsSection from '@/app/components/WhyUsSection';
import CartSection from '@/app/components/CartSection';
import { useGetMyProductsQuery } from '@/services/private/product';
import ProductFilterForm from '@/app/product/components/ProductFilterForm';

function ProductsSection({ searchParams }) {
  const [initValues, setInitValues] = useState(searchParams);
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useGetMyProductsQuery({
    ...initValues,
    offset: (page - 1) * rowsPerPage,
    page,
    limit: rowsPerPage,
  });

  const handleChangePagination = newPage => {
    setPage(newPage);
  };

  const loading = isLoading || isFetching;

  const handleSetFilter = filters => {
    setInitValues(filters);
  };

  return (
    <Box>
      <Box className=" relative border-t-8 border-t-black w-full overflow-hidden flex flex-col justify-center items-center ">
        <ProductFilterForm onFormSubmit={handleSetFilter} searchParams={searchParams} />
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
                image={item?.images}
                variations={item?.variations}
                sizes={item?.sizes}
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
        <Box className=" mr-[768px]">
          <WhyUsSection />
        </Box>
        <Box className=" absolute top-0 ml-[990px] bg-black h-full">
          <CartSection />
        </Box>
      </Box>
    </Box>
  );
}

ProductsSection.propTypes = {
  searchParams: propTypes.object,
};

export default ProductsSection;
