import {api} from '../apiSlice.js';

export const courseApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCourses: builder.query({
            query: () => '/courses/get',
            providesTags: ['Course'],
        }),
    }),
});

export const {
    useGetCoursesQuery,
} = courseApi;
