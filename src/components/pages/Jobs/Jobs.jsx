import React, {useState} from 'react';
import {useGetJobsQuery} from "../../../redux/api/jobBoardApi";
import styles from './Jobs.module.scss';
import Button from "../../UI/Button/Button";
import Container from "../../Container/Container";
import {Pagination} from "@mui/material";
import {useSelector} from 'react-redux';
import JobsFilterForm from './JobsFilterForm/JobsFilterForm';

const Jobs = () => {

  const [page, setPage] = useState(1);
  const category = useSelector(state => state.jobs.category);
  const type = useSelector(state => state.jobs.type);
  const jobLocation = useSelector(state => state.jobs.location);

  const {data, error, isLoading} = useGetJobsQuery({page, category, type, location: jobLocation});

  if (isLoading) {
    return <div>Loading ..</div>
  }

  const count = Math.ceil(data['count'] / data['itemsPerPage']);

  if (count == 0) {
    return (
        <div className={styles.jobs}>
          <Container>
            <JobsFilterForm type={type} category={category} location={jobLocation} />
            <div className={styles.not_found}>Jobs not found.</div>
          </Container>
        </div>
    )
  }

  return (
      <div className={styles.jobs}>
        <Container>
          <JobsFilterForm type={type} category={category} location={jobLocation} />
          {data['jobs'].map(job =>
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <Button className={styles.button} to={`/job/${job.id}`}>Read more</Button>
          </div>
          )}
          <Pagination
              className={styles.pager}
              count={count}
              shape="rounded"
              page={page}
              onChange = {(e, value) => setPage(value)}
          />
        </Container>
      </div>
  );
};

export default Jobs;