import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getToken = state => state.auth.token;

export const jobBoardApi = createApi({
  reducerPath: "jobBoardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getToken(getState());
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['job', 'recruiter_job', 'resume', 'job_seeker_resume', 'check_resume', 'login', 'register'],
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => '/profile',
      providesTags: ['login', 'register']
    }),
    getJob: builder.query({
      query: (id) => `/job/view/${id}`,
      providesTags: ['job'],
    }),
    getResume: builder.query({
      query: (id) => `/resume/view/${id}`,
      providesTags: ['resume'],
    }),
    getJobs: builder.query({
      query: ({page = 1, category, type, location}) => {
          let url = `/job/all?page=${page}`;
          if (category) {
            url += `&category=${category}`
          }
          if (type) {
            url += `&type=${type}`
          }
          if (location) {
            url += `&location=${location}`
          }
          return url;
      },
      providesTags: ['job'],
    }),
    getRecruiterJobs: builder.query({
      query: () => '/job/recruiter/view/all',
      providesTags: ['recruiter_job'],
    }),
    getJobSeekerResumes: builder.query({
      query : () => '/resume/get/job_seeker',
      providesTags: ['job_seeker_resume'],
    }),
    checkAttachResume: builder.query({
      query: (job_id) => `/resume/attach/${job_id}/check`,
      providesTags: ['check_resume']
    }),
    authUser: builder.mutation({
      query: (body) => ({
        url: '/login_check',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['login', 'resume', 'job_seeker_resume', 'check_resume', 'recruiter_job']
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body: body,
        formData: true,
      }),
      invalidatesTags: ['register']
    }),
    addJob: builder.mutation({
      query: (body) => ({
        url: '/job/recruiter/add',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['jobs', 'recruiter_job'],
    }),
    updateJob: builder.mutation({
      query: ({body, id}) => ({
        url: `/job/recruiter/update/${id}`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['jobs', 'recruiter_job', 'job'],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/job/recruiter/delete/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['jobs', 'recruiter_job', 'job'],
    }),
    addResume: builder.mutation({
      query: (body) => ({
        url: '/resume/seeker/add',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['resume', 'check_resume', 'job_seeker_resume']
    }),
    updateResume: builder.mutation({
      query: ({body, id}) => ({
        url: `/resume/seeker/update/${id}`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['resume', 'check_resume', 'job_seeker_resume']
    }),
    deleteResume: builder.mutation({
      query: (id) => ({
        url: `/resume/seeker/delete/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['resume', 'check_resume', 'job_seeker_resume']
    }),
    attachResume: builder.mutation({
      query: ($job_id) => ({
        url: `/resume/send/${$job_id}`,
        method: 'POST'
      }),
      invalidatesTags: ['job_seeker_resume']
    })
  })
});


export const { useGetUserProfileQuery, useDeleteJobMutation, useUpdateJobMutation, useUpdateResumeMutation, useGetJobQuery, useGetRecruiterJobsQuery, useCheckAttachResumeQuery, useRegisterUserMutation, useAddJobMutation, useAddResumeMutation, useAttachResumeMutation, useDeleteResumeMutation, useAuthUserMutation, useGetResumeQuery, useGetJobsQuery, useGetJobSeekerResumesQuery } = jobBoardApi;
