import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {
  useAttachResumeMutation, useCheckAttachResumeQuery,
  useGetJobQuery,
  useGetUserProfileQuery
} from "../../../redux/api/jobBoardApi";
import Container from "../../Container/Container";
import styles from "./Job.module.scss";
import Button from "../../UI/Button/Button";

const Job = () => {
  const {id} = useParams();
  const { data, error, isLoading } = useGetJobQuery(id);
  const profile = useGetUserProfileQuery();
  const checkAttach = useCheckAttachResumeQuery(id);
  const [attachResume, {attachIsLoading}] = useAttachResumeMutation();
  const [attachedResume, setAttachedResume] = useState(false);
  let attachResumeForm = '';
  if (isLoading || profile.isLoading || checkAttach.isLoading) {
    return (
        <Container>
          <div>loading ...</div>
        </Container>
    );
  }
  const handleAttachResume = async (e) => {
    e.preventDefault();
    const response = await attachResume(id);
    if (!attachIsLoading) {
      setAttachedResume(true)
    }
  }
  if (attachedResume) {
    attachResumeForm = <h3 className={styles.attached}>Resume attached.</h3>;
  }
  else {
    if (profile.data && !profile.isError) {
      if (profile.data.roles.includes('ROLE_JOB_SEEKER')) {
        if (checkAttach.data.check) {
          setAttachedResume(true)
        }
        else {
          attachResumeForm = <button onClick={e => handleAttachResume(e)} className={styles.button}>Attach resume</button>;
        }
      }
    }
  }
  return (
      <div className={styles.job}>
        <Container>
          <h1>{data.title}</h1>
          <div className={styles.salary}>{data.salary}</div>
          <div className={styles.company}>{data.company}</div>
          <div className={styles.location}>{data.location}</div>
          <div className={styles.type}>{data.type}</div>
          <div className={styles.category}>{data.category}</div>
          <div>
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
          <div>
            <h3>Requirements</h3>
            <p>{data.requirements}</p>
          </div>
          {attachResumeForm}
        </Container>
      </div>
  );
};

export default Job;