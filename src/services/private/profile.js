import { privateAPi } from '.';

export const profileApi = privateAPi.injectEndpoints({
  endpoints: build => ({
    getUserProfile: build.query({
      query: body => `/user-profile/user-profile/${body.username}/`,
      providesTags: ['UserProfile'],
    }),

    // update user profile

    updateUserProfile: build.mutation({
      query: ({ formData, username }) => ({
        url: `/user-profile/user-profile/${username}/`,
        method: 'PUT',
        body: formData,
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
