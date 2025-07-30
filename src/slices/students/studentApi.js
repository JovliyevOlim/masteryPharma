import {api} from '../apiSlice.js';

export const studentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        sendStudent: builder.mutation({
            query: (data) => ({
                url: '/students/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Student'],
        }),
    }),
});

export const {
    useSendStudentMutation,
} = studentApi;
