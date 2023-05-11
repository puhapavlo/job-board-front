import React, {useState} from 'react';
import {
  Button,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

const DeleteForm = ({entity, handleDelete, text='Delete', isOpen = false}) => {
  const [open, setOpen] = useState(isOpen);
  return (
      <div>
        <button onClick={e => setOpen(true)}>{text}</button>
        <Dialog PaperProps={{
          style: {
            backgroundColor: '#FFF5EC',
            maxHeight: '200px',
            height: '100%',
            justifyContent: 'space-between'
          },
        }} maxWidth='sm' maxHeight='lg' fullWidth={true} open={open} aria-labelledby="alert-dialog-title">
          <DialogTitle id="alert-dialog-title">
            <Typography variant="h4">
              {`Delete ${entity.charAt(0).toUpperCase() + entity.slice(1)}`}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Are you sure you want to delete this ${entity}?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete} variant="outlined" color="error">
              Yes
            </Button>
            <Button variant="outlined" onClick={e => setOpen(false)}>No</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
};

export default DeleteForm;