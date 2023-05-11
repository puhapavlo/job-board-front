import React from 'react';
import {useGetUserProfileQuery} from "../../../redux/api/jobBoardApi";
import {Navigate} from "react-router-dom";

const JobSeekerRoute = ({children}) => {
  const { data, error, isLoading } = useGetUserProfileQuery();
  if (!data) {
    return <Navigate to='/login' />
  }

  if (!data.roles.includes('ROLE_JOB_SEEKER')) {
    return <Navigate to='/profile' />
  }
  return children;
};

export default JobSeekerRoute;