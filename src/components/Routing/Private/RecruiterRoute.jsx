import React from 'react';
import {useGetUserProfileQuery} from "../../../redux/api/jobBoardApi";
import {Navigate} from "react-router-dom";

const RecruiterRoute = ({ children }) => {
  const { data, error, isLoading } = useGetUserProfileQuery();
  if (!data) {
    return <Navigate to='/login' />
  }

  if (!data.roles.includes('ROLE_RECRUITER')) {
    return <Navigate to='/profile' />
  }
  return children;
};

export default RecruiterRoute;