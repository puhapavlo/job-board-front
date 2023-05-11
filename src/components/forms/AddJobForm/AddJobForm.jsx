import React, {useState} from 'react';
import Select from "react-select";
import CurrencyInput from "react-currency-input-field";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import Container from "../../Container/Container";
import styles from './AddJobForm.module.scss';
import {
  useAddJobMutation,
  useUpdateJobMutation,
} from '../../../redux/api/jobBoardApi';
import {Navigate, useNavigate} from "react-router-dom";
import jobTypes from '../../../job/jobTypes';
import jobCategories from '../../../job/jobCategories';

const AddJobForm = ({update = false, data = null}) => {

  const [title, setTitle] = useState(update ? data.title : '');
  const [type, setType] = useState(update ? data.type : null);
  const [description, setDescription] = useState(update ? data.description : '');
  const [category, setCategory] = useState(update ? data.category : null);
  const [requirements, setRequirements] = useState(update ? data.requirements : '');
  const [salary, setSalary] = useState(update ? data.salary : '');
  const [location, setLocation] = useState(update ? data.location : '');
  const [company, setCompany] = useState(update ? data.company : '');

  const [addJob, {  isLoading }] = useAddJobMutation();
  const [updateJob, updateJobData] = useUpdateJobMutation();
  const navigate = useNavigate();
  const addJobCategories = jobCategories.slice(1);
  const addJobTypes = jobTypes.slice(1);

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!update) {
      const response = await addJob({
        title,
        type,
        company,
        description,
        category,
        requirements,
        salary,
        location
      });
      if (!isLoading) {
        navigate(`/job/${response.data.job.id}`)
      }
    }
    else {
      const response = await updateJob({
      body : {
            title,
            type,
            company,
            description,
            category,
            requirements,
            salary,
            location
      },
        id: data.id,
    });
      if (!updateJobData.isLoading) {
        navigate(`/job/${response.data.job.id}`)
      }
    }
  }

  return (
        <div className={styles.add_job}>
          <Container>
          <h2>Add job</h2>
          <form className={styles.form} onSubmit={handleAddJob}>
            <input
                required
                defaultValue={title}
                type="text"
                placeholder='Title'
                onChange={
                  (e) => setTitle(e.target.value)
                }
            />
            <Select
                required
                defaultValue={type ? {value: type, label: type} : null}
                options={addJobTypes}
                placeholder='Type'
                onChange={
                  (e) => setType(e.value)
                }
            />
            <input
                required
                defaultValue={company}
                type="text"
                placeholder="Company"
                onChange={
                  (e) => setCompany(e.target.value)
                }
            />
            <textarea
                defaultValue={description}
                placeholder="Description"
                onChange={
                  (e) => setDescription(e.target.value)
                }
            />
            <Select
                required
                defaultValue={category ? {value: category, label: category} : null}
                options={addJobCategories}
                placeholder="Category"
                onChange={
                  (e) => setCategory(e.value)
                }
            />
            <textarea
                placeholder="Requirements"
                defaultValue={requirements}
                onChange={
                  (e) => setRequirements(e.target.value)
                }
            />
            <CurrencyInput
                defaultValue={salary}
                placeholder="Salary"
                prefix="$"
                onValueChange={
                  (value) => setSalary(value)
              }
            />
            <ReactGoogleAutocomplete
                required
                defaultValue={location}
                apiKey="AIzaSyB_Vc2T95RFsJxQtpx_ZBk7cDOJvOD6fFI"
                placeholder="Location"
                onPlaceSelected={
                  (place) => setLocation(place.formatted_address)
                }
            />
            <button disabled={isLoading} type='submit'>{isLoading ? 'Loading..' : 'Submit'}</button>
          </form>
          </Container>
        </div>
  );
};

export default AddJobForm;