import { privateAPi } from '.';

export const ordersApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getOrders: build.query({
      query: params => ({
        url: '/products/list-order/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetOrders'],
    }),

    getOrdersByNumber: build.query({
      query: orderNumber => `/products/retrive-update-order/${orderNumber}/`,
      providesTags: ['GetOrdersByNumber'],
    }),

    addOrder: build.mutation({
      query: body => ({
        url: '/products/create-order/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetOrders', 'GetCart'],
    }),

    addOrderAgain: build.mutation({
      query: body => ({
        url: '/products/create-order-again/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetOrders', 'GetCart'],
    }),

    addOrderPaymentDetail: build.mutation({
      query: body => ({
        url: '/products/payment-details/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetOrders'],
    }),

    UpdateOrder: build.mutation({
      query: body => ({
        url: `/dashboard/orders/${body?.orderNumber}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['GetOrders', 'GetOrdersByNumber'],
    }),

    UpdateOrderStatus: build.mutation({
      query: body => ({
        url: `/dashboard/orders/${body?.orderNumber}/`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['GetOrders', 'GetOrdersByNumber'],
    }),

    UpdateCancelOrderStatus: build.mutation({
      query: body => ({
        url: `/dashboard/cancel-order-status/${body?.orderNumber}/`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['GetOrders', 'GetOrdersByNumber'],
    }),

    UpdateOrderPaymentStatus: build.mutation({
      query: body => ({
        url: `/dashboard/update-payment-status/${body?.orderNumber}/`,
        method: 'PATCH',
        body: {
          payment_status: body.status,
        },
      }),
      invalidatesTags: ['GetOrders', 'GetOrdersByNumber'],
    }),

    deleteOrder: build.mutation({
      query: slug => ({
        url: `/service/services/${slug}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetOrders', 'GetOrdersByNumber'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByNumberQuery,
  useAddOrderMutation,
  useAddOrderAgainMutation,
  useAddOrderPaymentDetailMutation,
  useUpdateOrderStatusMutation,
  useUpdateCancelOrderStatusMutation,
  useUpdateOrderPaymentStatusMutation,
  useUpdateOrderMutation,
} = ordersApi;
