import { privateAPi } from '.';

export const productApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query({
      query: params => ({
        url: '/products/products/',
        method: 'GET',
        params,
      }),
      providesTags: ['GetProduct'],
    }),

    getPopularProducts: build.query({
      query: () => '/api/service/popular-services/',
      providesTags: ['GetPopularService'],
    }),

    getProductById: build.query({
      query: slug => `/products/product/${slug}/`,
      providesTags: ['GetProductById'],
    }),

    getServiceTimeSlots: build.query({
      query: params => ({
        url: '/services/available-staff-slots/',
        method: 'GET',
        params,
      }),
    }),

    addService: build.mutation({
      query: body => ({
        url: '/services/services/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),

    UpdateService: build.mutation({
      query: body => ({
        url: `/services/services/${body?.id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
    }),

    deleteService: build.mutation({
      query: slug => ({
        url: `/service/services/${slug}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GetService', 'GetServiceById'],
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
  useGetProductsQuery,
  useGetPopularProductsQuery,
  useAddServiceMutation,
  useGetProductByIdQuery,
  useLazyGetServiceTimeSlotsQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceStatusMutation,
} = productApi;
