import React from 'react';
import createProfile from '../../../../assets/images/create-profile.png';
import Button from "../../../UI/Button/Button";
import styles from "./CreateProfileBlock.module.scss";

const CreateProfileBlock = () => {
  return (
      <div className={styles.create_profile}>
        <img src={createProfile} alt="create-profile"/>
        <div className={styles.description}>
          <h3>Create Profile</h3>
          <h2>Build Your Personal
            Account Profile</h2>
          <p>Create an account for the job information you want, get daily notifications and you can easily apply directly to the company you want and create an account now for free</p>
          <Button to='/register'>Create Account</Button>
        </div>
      </div>
  );
};

export default CreateProfileBlock;