import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useGetResumeQuery} from '../../../redux/api/jobBoardApi';
import Container from '../../Container/Container';
import styles from './Resume.module.scss';
import AccountPicture from '../../UI/AccountPicture/AccountPicture';

const Resume = () => {

  const {id} = useParams();
  const {data, error, isLoading, isError} = useGetResumeQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
        <div>Loading ..</div>
    );
  }

  if (isError) {
    navigate('/profile');
  }

  const resume = data.resume;

  return (
      <div className={styles.resume}>
        <Container>
          <h2 className={styles.title}>Resume from {resume.author.email}</h2>
          <AccountPicture data={resume.author} />
          <div>
            <h3>Summary</h3>
            <p>{resume.summary ?? 'Not found'}</p>
          </div>
          <div>
            <h3>Phone</h3>
            {
              resume.phone
                  ?
                  <a className={styles.link} href={`tel:${resume.phone}`}>{resume.phone}</a>
                  :
                  'Not found'
            }
          </div>
          <div>
            <h3>Email</h3>
            {
              resume.author
                  ?
                  <a className={styles.link} href={`mail:${resume.author.email}`}>{resume.author.email}</a>
                  :
                  'Not found'
            }
          </div>
          <div>
            <h3>Education</h3>
            <p>{resume.education ?? 'Not found'}</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>{resume.experience ?? 'Not found'}</p>
          </div>
          <div>
            <h3>Skills</h3>
            <p>{resume.skills ?? 'Not found'}</p>
          </div>
          <div>
            <h3>Certifications</h3>
            <p>{resume.certifications ?? 'Not found'}</p>
          </div>
        </Container>
      </div>
  );
};

export default Resume;