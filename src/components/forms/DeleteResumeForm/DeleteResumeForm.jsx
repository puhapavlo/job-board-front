import {useNavigate} from 'react-router-dom';
import {useDeleteResumeMutation} from '../../../redux/api/jobBoardApi';
import DeleteForm from '../../UI/DeleteForm/DeleteForm';
import {useState} from 'react';

const DeleteResumeForm = ({id}) => {
  const navigate = useNavigate();
  const [deleteResume, { isLoading }] = useDeleteResumeMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const response = await deleteResume(id);
    if (!isLoading) {
      setOpen(false);
      navigate('/profile');
    }
  }

  return (
      <DeleteForm text='Delete your resume' isOpen={open} entity='resume' handleDelete={handleDelete} />
  );
};

export default DeleteResumeForm;