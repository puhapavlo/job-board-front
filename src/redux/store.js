import { configureStore } from '@reduxjs/toolkit';
import authReducer from  './features/auth/authSlice';
import jobsReducer from './features/jobs/jobsSlice';
import {jobBoardApi} from "./api/jobBoardApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    [jobBoardApi.reducerPath]: jobBoardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jobBoardApi.middleware),
})
export default store;