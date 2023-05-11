import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetJobQuery} from '../../../../redux/api/jobBoardApi';
import AddJobForm from '../AddJobForm';

const UpdateJobForm = () => {
  const {id} = useParams();
  const {data, error, isLoading} = useGetJobQuery(id);
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
      <AddJobForm update={true} data={data} />
  );
};

export default UpdateJobForm;