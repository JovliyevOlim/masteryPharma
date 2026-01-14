// features/api/apiSlice.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//export const baseUrl = 'https://mastery-pharma.uz/api'
export const baseUrl = 'http://95.46.96.160:8080/api'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl, // bu yerda domeningizni yozing
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    tagTypes: ['Student', 'Course', 'Feedback'],
    endpoints: () => ({}),
});
