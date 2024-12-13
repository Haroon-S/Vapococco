import { privateAPi } from '.';

export const profileApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getUserProfile: build.query({
      query: body => `/user-profile/user-profile/${body.username}/`,
      providesTags: ['UserProfile'],
    }),

    // update user profile

    updateUserProfile: build.mutation({
      query: body => ({
        url: `/user-profile/user-profile/${body?.username}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['UserProfile'],
    }),
    updateUserAbout: build.mutation({
      query: body => ({
        url: `/api/profile/user-profile/${body.username}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['UserProfile'],
    }),
    UserProfile: build.query({
      query: body => `/user-profile/user-profile/${body.username}/`,
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateUserAboutMutation,
} = profileApi;
