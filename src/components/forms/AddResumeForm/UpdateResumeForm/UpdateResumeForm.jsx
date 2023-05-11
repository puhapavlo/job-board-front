import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetResumeQuery} from '../../../../redux/api/jobBoardApi';
import AddResumeForm from '../AddResumeForm';

const UpdateResumeForm = () => {
  const {id} = useParams();
  const {data, error, isLoading, isError} = useGetResumeQuery(id);
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
      <AddResumeForm update={true} data={data.resume} />
  );
};

export default UpdateResumeForm;