import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../../config/env';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.API_URL,
    credentials: 'include'
  }),
  tagTypes: ['User', 'Item'],
  endpoints: builder => ({
    getDashboard: builder.query<any, void>({
      query: () => '/dashboard'
    })
  })
});

export const { useGetDashboardQuery } = apiSlice;
