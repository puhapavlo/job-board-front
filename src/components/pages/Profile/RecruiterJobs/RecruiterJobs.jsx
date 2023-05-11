import React from 'react';
import {useGetRecruiterJobsQuery} from "../../../../redux/api/jobBoardApi";
import Container from "../../../Container/Container";
import styles from './RecruiterJobs.module.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow
} from "@mui/material";
import {Link} from "react-router-dom";
import Button from '../../../UI/Button/Button';
import DeleteJobForm from '../../../forms/DeleteJobForm/DeleteJobForm';

const RecruiterJobs = () => {

  const { data, error, isLoading } = useGetRecruiterJobsQuery();

  if (isLoading) {
    return (
        <Container>
          <div>loading ...</div>
        </Container>
    );
  }

  if (data.length == 0) {
    return <div></div>
  }

  return (
      <div>
        <h3 className={styles.title}>Your jobs</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><h3>Job</h3></TableCell>
                <TableCell><h3>Resumes</h3></TableCell>
                <TableCell><h3>Operations</h3></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((job) =>
                  <TableRow key={job.id}>
                    <TableCell>
                      <div className={styles.job_link}>
                        <Link to={`/job/${job.id}`}>{job.title}</Link>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={styles.resume_link}>
                        {
                          job.resume.map((resume) =>
                            <Link key={resume.id} to={`/resume/${resume.id}`}>Resume from {resume.author.email}<br/></Link>
                          )
                        }
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={styles.operations}>
                        <Button to={`/job/update/${job.id}`}>Edit</Button>
                        <DeleteJobForm id={job.id} />
                      </div>
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default RecruiterJobs;