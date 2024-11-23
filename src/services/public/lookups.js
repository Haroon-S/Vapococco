import { publicApi } from '.';

export const lookupsApi = publicApi.injectEndpoints({
  endpoints: build => ({
    getCountryCallingCodes: build.query({
      query: () => '/assets/calling-code/',
    }),
    getCountries: build.query({
      query: () => '/assets/countries/',
    })
  }),
});

export const { useGetCountryCallingCodesQuery, useGetCountriesQuery } = lookupsApi;
