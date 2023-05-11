import React from 'react';
import Container from "../../Container/Container";
import {
  useGetJobSeekerResumesQuery,
  useGetUserProfileQuery
} from "../../../redux/api/jobBoardApi";
import rolesMap from "../../../user/roles/rolesMap.json";
import {Navigate} from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./Profile.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {logoutSuccess} from "../../../redux/features/auth/authSlice";
import RecruiterJobs from "./RecruiterJobs/RecruiterJobs";
import AccountPicture from '../../UI/AccountPicture/AccountPicture';
import DeleteResumeForm from '../../forms/DeleteResumeForm/DeleteResumeForm';

const Profile = () => {
  const { data, isLoading, isError } = useGetUserProfileQuery();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const resumes = useGetJobSeekerResumesQuery();
  let addJob = '';
  let resume = '';
  let recruiterJobs = '';
  if (isLoading || resumes.isLoading) {
    return (
        <Container>
          <div>loading ...</div>
        </Container>
    );
  }
  if (!isAuth) {
    return <Navigate to='/login' />
  }
  if (!data || isError) {
    dispatch(logoutSuccess())
    return <Navigate to='/login' />
  }
  else {
    if (data.roles.includes('ROLE_RECRUITER')) {
      recruiterJobs = <RecruiterJobs />
      addJob = <Button to='/job/add'>Add Job</Button>;
    }
    if (data.roles.includes('ROLE_JOB_SEEKER')) {
      if (resumes.data.length == 0) {
        resume = <Button to='/resume/add'>Add resume</Button>
      }
      else {
        resume = resumes.data.map(resume =>
            <div key={resume.id} className={styles.resume}>
              <Button to={`/resume/${resume.id}`}>Your resume</Button>
              <Button to={`/resume/update/${resume.id}`}>Edit your resume</Button>
              <DeleteResumeForm id={resume.id} />
            </div>
        )
      }
    }
    let roles = '';
    if (Array.isArray(data.roles)) {
      data.roles.forEach(role => {
        roles += rolesMap[role];
      });
    }
    else {
      roles = rolesMap.roles;
    }

    return (
        <div className={styles.profile}>
          <Container>
            <h2 className={styles.title}>Your profile</h2>
            <div>
              <AccountPicture data={data} />
              <div className={styles.info}>
                <div className={styles.email}>{data.email}</div>
                <div>{roles}</div>
              </div>
            </div>
            {recruiterJobs}
            <div className={styles.add_job}>
              {addJob}
            </div>
            <div className={styles.add_resume}>
              {resume}
            </div>
          </Container>
        </div>
    );
  }
};

export default Profile;