import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  useDeleteJobMutation,
} from '../../../redux/api/jobBoardApi';
import DeleteForm from '../../UI/DeleteForm/DeleteForm';

const DeleteJobForm = ({id}) => {
  const navigate = useNavigate();
  const [deleteJob, { isLoading }] = useDeleteJobMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const response = await deleteJob(id);
    if (!isLoading) {
      setOpen(false);
      navigate('/profile');
    }
  }

  return (
      <DeleteForm isOpen={open} entity='job' handleDelete={handleDelete} />
  );
};

export default DeleteJobForm;