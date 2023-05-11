import React from 'react';
import {Avatar} from '@mui/material';
import {deepOrange} from '@mui/material/colors';
import styles from './AccountPicture.module.scss';

const AccountPicture = (data) => {
  return (
      <div className={styles.avatar}>
        {
          data.data.picture
            ?
          <Avatar alt='User picture' sx={{ width: 200, height: 200 }} src={data.data.picture} />
              :
          <Avatar alt='User picture' sx={{ bgcolor: deepOrange[500], width: 200, height: 200 }}>{data.data.email.charAt(0).toUpperCase()}</Avatar>
        }
      </div>
  )
};

export default AccountPicture;