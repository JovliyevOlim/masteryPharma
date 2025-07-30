import {api} from '../apiSlice.js';

export const feedBackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFeedBacks: builder.query({
            query: () => '/feedbacks/approved',
            providesTags: ['Feedback'],
        }),
    }),
});

export const {
    useGetFeedBacksQuery,
} = feedBackApi;
