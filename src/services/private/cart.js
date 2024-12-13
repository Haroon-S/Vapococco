import { privateAPi } from '.';

export const cartApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getCart: build.query({
      query: params => ({
        url: '/products/retrieve-cart/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetCart'],
    }),

    addToCart: build.mutation({
      query: body => ({
        url: '/products/create-cart-item/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetCart'],
    }),

    UpdateCart: build.mutation({
      query: body => ({
        url: `/products/update-cart-item/${body?.id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['GetCart'],
    }),

    deleteCart: build.mutation({
      query: slug => ({
        url: `/products/delete-cart-item/${slug}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetCart'],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
