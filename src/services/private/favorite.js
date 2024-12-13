import { privateAPi } from '.';

export const productApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getFavoriteProducts: build.query({
      query: params => ({
        url: '/products/favorite-products/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetFavoriteProducts'],
    }),

    addFavoriteProducts: build.mutation({
      query: body => ({
        url: '/products/favorite-products/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetFavoriteProducts'],
    }),

    deleteFavoriteProducts: build.mutation({
      query: id => ({
        url: `/products/favorite-products/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetFavoriteProducts'],
    }),

    updateServiceStatus: build.mutation({
      query: body => ({
        url: `/api/service/services/${body?.slug}/`,
        method: 'PATCH',
        body: {
          service_status: body.status,
        },
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),
  }),
});

export const {
  useGetFavoriteProductsQuery,
  useAddFavoriteProductsMutation,
  useDeleteFavoriteProductsMutation,
  useUpdateServiceStatusMutation,
} = productApi;
