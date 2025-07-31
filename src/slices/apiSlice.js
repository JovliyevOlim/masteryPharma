// features/api/apiSlice.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mastery-pharma.uz/api', // bu yerda domeningizni yozing
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    tagTypes: ['Student', 'Course', 'Feedback'],
    endpoints: () => ({}),
});
