import { publicApi } from '.';

export const authApi = publicApi.injectEndpoints({
  endpoints: build => ({
    signUp: build.mutation({
      query: body => ({
        url: '/user/register/',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: body => ({
        url: '/user/login/',
        method: 'POST',
        body,
      }),
    }),
    forgotPassword: build.mutation({
      query: body => ({ url: '/user/forget-password/', method: 'POST', body }),
    }),
    verifyToken: build.mutation({
      query: id => ({ url: `/user/account-activation/${id}`, method: 'POST' }),
    }),
    resetPassword: build.mutation({
      query: body => ({
        url: `/user/reset-password/${body?.token}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyTokenMutation,
} = authApi;
