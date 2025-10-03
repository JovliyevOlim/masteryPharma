import {api} from '../apiSlice.js';

export const feedBackApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFeedBacks: builder.query({
            query: () => '/feedbacks/approved',
            providesTags: ['Feedback'],
        }),
        sendFeedback: builder.mutation({
            query: (data) => ({
                url: '/feedbacks',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Student'],
        }),
    }),
});

export const {
    useGetFeedBacksQuery,useSendFeedbackMutation,
} = feedBackApi;
